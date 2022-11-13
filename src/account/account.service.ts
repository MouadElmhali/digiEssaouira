import { Service } from "typedi";
import { accountModel } from "./schemas/account.schema";
import { Account } from "./models/account.model";
import { Types } from "mongoose";
import { ApolloError } from "apollo-server-core";
import { hash, compare } from "bcrypt";
import { sign } from "jsonwebtoken";

@Service()
export class AccountService {
  async getUsers(): Promise<Account[]> {
    return await accountModel.find();
  }

  async register(email: string, userName: string, password: string) {
    try {
      const checkUser = await accountModel.findOne({ email: email });
      console.log(checkUser);
      if (checkUser) {
        // throw new ApolloError(
        //   "the user whit this email " + email + " already exist"
        // );
        return "the user whit this email " + email + " already exist";
      }
      const encryptedPassword = await hash(password, 10);
      return await accountModel.create({
        userName: userName,
        email: email,
        password: encryptedPassword,
      });
    } catch (error) {
      // @ts-ignore
      return error;
    }
  }

  async login(email: string, password: string) {
    const checkUser = await accountModel.findOne({
      email: email,
    });

    if (!checkUser) {
      throw new ApolloError("this account isnt created yet");
    }
    // @ts-ignore
    if (await compare(password, checkUser.password)) {
      const jwt = sign(
        { user_email: checkUser.email, user_userName: checkUser.userName },
        // @ts-ignore
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );
      console.log(await compare(password, checkUser.password));
      return jwt;
    } else {
      throw new ApolloError("password error");
    }
  }
}

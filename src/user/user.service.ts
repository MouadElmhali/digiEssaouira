import { Service } from "typedi";
import { userModel } from "./schemas/user.schema";
import { User, UserInput } from "./models/user.model";
import { Types } from "mongoose";
import { ApolloError } from "apollo-server-core";
import { hash, compare } from "bcrypt";
import { sign } from "jsonwebtoken";

@Service()
export class UserService {
  async getUsers(): Promise<User[]> {
    return await userModel.find();
  }

  async register(email: string, userName: string, password: string) {
    // @ts-ignore
    // const newUser = new User({
    //   userName: userName,
    //   email: email,
    //   password: "encryptedPassword",
    // });

    // const jwt = sign(
    //   { user_email: email, user_username: userName },
    //   // @ts-ignore
    //   process.env.JWT_SECRET,
    //   { expiresIn: "1h" }
    // );

    try {
      const checkUser = await userModel.findOne({ email: email });
      console.log(checkUser);
      if (!checkUser) {
        // throw new ApolloError(
        //   "the user whit this email " + email + " already exist"
        // );
        return "the user whit this email " + email + " already exist";
      }
      const encryptedPassword = await hash(password, 10);
      return await userModel.create({
        userName: userName,
        firstName: "hhhh",
        lastName: "oioio",
        email: email,
        password: encryptedPassword,
      });
    } catch (error) {
      // @ts-ignore
      return error;
    }
  }

  async login(user: string) {
    // const checkUser = await userModel.findOne({
    //   email: user.email,
    //   password: user.password,
    // });

    // if (!checkUser) {
    //   throw new ApolloError("this account isnt created yet");
    // }

    console.log(user);

    // const jwt = sign(
    //   { user_id: checkUser.id, user_email: checkUser.email },
    //   // @ts-ignore
    //   process.env.JWT_SECRET,
    //   { expiresIn: "1h" }
    // );

    // return jwt;
  }

  async getElecteds(): Promise<User[]> {
    return await userModel.find({});
  }
}

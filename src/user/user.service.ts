import { Service } from "typedi";
import { userModel } from "./schemas/user.schema";
import { User, UserInput } from "./models/user.model";
import { Types } from "mongoose";
import { ApolloError } from "apollo-server-core";
// import { hash, compare } from "bcrypt";
// import { sign } from "jsonwebtoken";

@Service()
export class UserService {
  async getUsers(): Promise<User[]> {
    return await userModel.find();
  }

  async register(user: UserInput): Promise<User> {
    // @ts-ignore
    // const newUser = new User({
    //   userName: user.userName,
    //   email: user.email,
    //   password: encryptedPassword,
    // });

    // const jwt = sign(
    //   { user_id: newUser.id, user_email: user.email },
    //   process.env.JWT_SECRET,
    //   { expiresIn: "1h" }
    // );
    console.log("wa dazete");
    try {
      const checkUser = await userModel.findById({ email: user.email });
      if (checkUser) {
        throw new ApolloError(
          "the user whit this email " + user.email + " already exist"
        );
      }
      // const encryptedPassword = await hash(user.password, 10);
      return await userModel.create({
        userName: user.userName,
        email: user.email,
        // password: encryptedPassword,
      });
    } catch (error) {
      // @ts-ignore
      return error;
    }
  }

  async login(user: UserInput) {
    const checkUser = await userModel.findOne({
      email: user.email,
      password: user.password,
    });

    if (!checkUser) {
      throw new ApolloError("this account isnt created yet");
    }

    // const jwt = sign(
    //   { user_id: checkUser.id, user_email: checkUser.email },
    //   // @ts-ignore
    //   process.env.JWT_SECRET,
    //   { expiresIn: "1h" }
    // );

    // return jwt;
  }
}

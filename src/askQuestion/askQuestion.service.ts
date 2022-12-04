import { Service } from "typedi";
import { askQuestionModel } from "./schemas/askQuestion.schema";
import { AskQuestion } from "./models/askQuestion.model";
import { Types } from "mongoose";
import { ApolloError } from "apollo-server-core";
import { hash, compare } from "bcrypt";
import { sign } from "jsonwebtoken";

@Service()
export class AskQuestionService {
  async ask(
    object: string,
    elected: string,
    userName: string,
    email: string,
    message: string,
    xp: boolean
  ) {
    return await askQuestionModel.create({
      object: object,
      elected: elected,
      userName: userName,
      email: email,
      message: message,
      xp: xp,
    });
  }
}

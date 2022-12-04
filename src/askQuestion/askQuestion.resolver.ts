import { Query, Resolver, Mutation, Args, Root, Arg } from "type-graphql";
import { Inject, Service } from "typedi";
import { AskQuestionService } from "./askQuestion.service";
import { AskQuestion } from "./models/askQuestion.model";

@Service()
@Resolver((of) => AskQuestion)
export class AskQuestionResolver {
  constructor(
    @Inject() private readonly askQuestionService: AskQuestionService
  ) {}

  @Mutation((returns) => AskQuestion)
  async ask(
    @Arg("elected") elected: string,
    @Arg("object") object: string,
    @Arg("email") email: string,
    @Arg("userName") userName: string,
    @Arg("message") message: string,
    @Arg("xp") xp: boolean
  ) {
    return await this.askQuestionService.ask(
      object,
      elected,
      email,
      userName,
      message,
      xp
    );
  }
}

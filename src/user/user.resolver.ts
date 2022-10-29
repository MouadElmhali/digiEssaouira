import { Query, Resolver, Mutation, Args, Root, Arg } from "type-graphql";
import { Inject, Service } from "typedi";
import { UserService } from "./user.service";
import { User, UserInput } from "./models/user.model";

@Service()
@Resolver((of) => User)
export class UserResolver {
  constructor(@Inject() private readonly userService: UserService) {}

  @Mutation((returns) => User)
  async register(@Arg("user") user: UserInput) {
    return await this.userService.register(user);
  }

  @Query((returns) => String)
  async login(@Root("user") user: UserInput) {
    return await this.userService.login(user);
  }
}

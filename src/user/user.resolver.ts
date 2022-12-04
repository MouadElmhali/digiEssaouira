import { Query, Resolver, Mutation, Args, Root, Arg } from "type-graphql";
import { Inject, Service } from "typedi";
import { UserService } from "./user.service";
import { User, UserInput } from "./models/user.model";

@Service()
@Resolver((of) => User)
export class UserResolver {
  constructor(@Inject() private readonly userService: UserService) {}

  async electeds() {
    return await this.userService.getElecteds();
  }
}

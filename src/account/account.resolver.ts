import { Query, Resolver, Mutation, Args, Root, Arg } from "type-graphql";
import { Inject, Service } from "typedi";
import { AccountService } from "./account.service";
import { Account } from "./models/account.model";

@Service()
@Resolver((of) => Account)
export class AccountResolver {
  constructor(@Inject() private readonly accountService: AccountService) {}

  @Mutation((returns) => Account)
  async register(
    @Arg("email") email: string,
    @Arg("userName") userName: string,
    @Arg("password") password: string
  ) {
    return await this.accountService.register(email, userName, password);
  }

  @Query((returns) => String)
  async login(@Arg("email") email: string, @Arg("password") password: string) {
    return await this.accountService.login(email, password);
  }
  
}

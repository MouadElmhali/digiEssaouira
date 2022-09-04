import { Query, Resolver } from "type-graphql";
import { Service } from "typedi";
import { CommonService } from "./common.service";
import { Common } from "./models/common.model";

@Service()
@Resolver((of) => Common)
export class CommonResolver {
  constructor(private readonly commonService: CommonService) {}

  @Query((returns) => [Common])
  async commons() {
    return await this.commonService.getCommons();
  }
}

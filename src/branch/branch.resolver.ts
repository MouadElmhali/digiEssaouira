import { Query, Resolver } from "type-graphql";
import { Inject, Service } from "typedi";
import { BranchService } from "./branch.service";
import { Branch } from "./models/branch.model";

@Service()
@Resolver((of) => Branch)
export class BranchResolver {
  constructor(@Inject() private readonly branchService: BranchService) {}

  @Query((returns) => [Branch])
  async branches(): Promise<Branch[]> {
    return await this.branchService.getBranches();
  }
}

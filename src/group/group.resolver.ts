import {
  FieldResolver,
  Query,
  Resolver,
  ResolverInterface,
  Root,
} from "type-graphql";
import { Inject, Service } from "typedi";
import { BranchService } from "../branch/branch.service";
import { GroupService } from "./group.service";
import { Group } from "./models/group.model";

@Service()
@Resolver()
export class GroupResolver {
  constructor(
    @Inject() private readonly groupService: GroupService,
    @Inject() private readonly branchService: BranchService
  ) {}

  @Query((returns) => [Group])
  async groups(): Promise<Group[]> {
    return await this.groupService.getGroups();
  }
}

import {
  Arg,
  FieldResolver,
  Query,
  Resolver,
  ResolverInterface,
  Root,
} from "type-graphql";
import { Inject, Service } from "typedi";

import { BranchService } from "../branch/branch.service";
import { Branch } from "../branch/models/branch.model";
import { Party } from "../party/models/party.model";
import { PartyService } from "../party/party.service";
import { PostService } from "../post/post.service";
import { GetElectedDto } from "./dto/get-elected.dto";
import { GetElectedsByBranchIdDto } from "./dto/get-electeds-by-branch-id.dto";
import { ElectedService } from "./elected.service";
import { Elected } from "./models/elected.model";
import type { IElected } from "./schemas/elected.schema";

@Service()
@Resolver((of) => Elected)
export class ElectedResolver implements ResolverInterface<Elected> {
  constructor(
    @Inject() private readonly electedService: ElectedService,
    @Inject() private readonly branchService: BranchService,
    @Inject() private readonly partyService: PartyService,
    @Inject() private readonly postService: PostService
  ) {}

  @Query((returns) => [Elected])
  async electeds() {
    return await this.electedService.getElecteds();
  }

  @Query((returns) => Elected)
  async elected(@Arg("id") { id }: GetElectedDto) {
    return await this.electedService.getElected(id);
  }

  @Query((returns) => [Elected])
  async electedsByBranchId(@Arg("id") { id }: GetElectedsByBranchIdDto) {
    return await this.electedService.getElectedsByBranchId(id);
  }

  @FieldResolver((returns) => Branch)
  async branch(@Root() elected: any) {
    const { branch } = elected as IElected;

    return await this.branchService.getBranch(branch);
  }

  @FieldResolver((returns) => Party)
  async party(@Root() elected: any) {
    const { party } = elected as IElected;

    return await this.partyService.getParty(party);
  }

  @FieldResolver((returns) => Party)
  async post(@Root() elected: any) {
    const { post } = elected as IElected;

    return await this.postService.getPost(post);
  }
}

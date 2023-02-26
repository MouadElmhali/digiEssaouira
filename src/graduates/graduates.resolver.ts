import {
  Arg,
  FieldResolver,
  Query,
  Resolver,
  ResolverInterface,
  Root,
} from "type-graphql";
import { Inject, Service } from "typedi";
import { Graduates } from "./models/graduates.model";
import { GraduatesService } from "./graduates.service";

@Service()
@Resolver((of) => Graduates)
// @ts-ignore
export class GraduatesResolver implements ResolverInterface<Association> {
  constructor(
    @Inject() private readonly graduatesService: GraduatesService // @Inject() private readonly branchService: BranchService
  ) {}

  @Query((returns) => [Graduates])
  async getGraduates() {
    return await this.graduatesService.getGraduates();
  }

  @Query((returns) => Graduates)
  async getGraduatesById(@Arg("id") id: string) {
    return await this.graduatesService.getGraduatesById(id);
  }
}

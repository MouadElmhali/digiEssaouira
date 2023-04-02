import {
  Arg,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  ResolverInterface,
  Root,
} from "type-graphql";
import { Inject, Service } from "typedi";
import { Association, AssociationInput } from "./models/association.model";
import { AssociationService } from "./association.service";

@Service()
@Resolver((of) => Association)
// @ts-ignore
export class AssociationResolver implements ResolverInterface<Association> {
  constructor(
    @Inject() private readonly associationService: AssociationService // @Inject() private readonly branchService: BranchService
  ) {}

  @Query((returns) => [Association])
  async getAssociation() {
    return await this.associationService.getAssociation();
  }
  @Query((returns) => [Association])
  async getAssociationByRegionId(@Arg("id") id: string) {
    return await this.associationService.getAssociationByRegionId(id);
  }

  @Query((returns) => Association)
  async getAssociationById(@Arg("id") id: string) {
    return await this.associationService.getAssociationById(id);
  }

  @Mutation((returns) => String)
  async createAssociation(@Arg('input') input: AssociationInput) {
    return this.associationService.createAssociation(input);
  }
}

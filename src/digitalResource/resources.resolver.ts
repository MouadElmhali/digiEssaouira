import { Query, Resolver } from "type-graphql";
import { Inject, Service } from "typedi";
import { ResourceService } from "./resources.service";
import { Resource } from "./models/resource.model";

@Service()
@Resolver((of) => Resource)
export class ResourcesResolver {
  constructor(@Inject() private readonly resourceService: ResourceService) {}

  @Query((returns) => [Resource])
  async resources(): Promise<Resource[]> {
    console.log(await this.resourceService.getResources());
    return await this.resourceService.getResources();
  }
}

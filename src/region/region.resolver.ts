import { Query, Resolver } from "type-graphql";
import { Inject, Service } from "typedi";
import { RegionService } from "./region.service";
import { Region } from "./models/region.model";

@Service()
@Resolver((of) => Region)
export class RegionResolver {
  constructor(@Inject() private readonly regionService: RegionService) {}

  @Query((returns) => [Region])
  async regions(): Promise<Region[]> {
    return await this.regionService.getRegions();
  }
}

import { Arg, Query, Resolver } from "type-graphql";
import { Inject, Service } from "typedi";
import { RegionService } from "./region.service";
import { Region } from "./models/region.model";
import { Types } from "mongoose";

@Service()
@Resolver((of) => Region)
export class RegionResolver {
  constructor(@Inject() private readonly regionService: RegionService) {}

  @Query((returns) => [Region])
  async regions(): Promise<Region[]> {
    return await this.regionService.getRegions();
  }

  @Query((returns) => Region)
  async region(@Arg("id") id: string) {
    return await this.regionService.getRegion(id);
  }
}

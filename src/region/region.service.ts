import { Service } from "typedi";
import { regionModel } from "./schemas/region.schema";
import { Region } from "./models/region.model";
import { Types } from "mongoose";

@Service()
export class RegionService {
  async getRegions(): Promise<Region[]> {
    return await regionModel.find();
  }

  async getRegion(id: string): Promise<Region> {
    return (await regionModel.findById(id)) as Region;
  }
}

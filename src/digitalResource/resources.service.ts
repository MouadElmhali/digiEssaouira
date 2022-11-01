import { Service } from "typedi";
import { resourceModel } from "./schemas/resource.schema";
import { Resource } from "./models/resource.model";
import { Types } from "mongoose";

@Service()
export class ResourceService {
  async getResources(): Promise<Resource[]> {
    return await resourceModel.find();
  }
}

import { Service } from "typedi";
import { Elected } from "./models/elected.model";
import { electedModel } from "./schemas/elected.schema";

@Service()
export class ElectedService {
  async getElecteds(): Promise<Elected[]> {
    return await electedModel.find({});
  }

  async getElected(id: string): Promise<Elected> {
    return (await electedModel.findById(id)) as Elected;
  }

  async getElectedsByBranchId(id: string): Promise<Elected[]> {
    return await electedModel.find({ branch: id });
  }
}

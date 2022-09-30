import { Service } from "typedi";
import { branchModel } from "./schemas/branch.schema";
import { Branch } from "./models/branch.model";
import { Types } from "mongoose";

@Service()
export class BranchService {
  async getBranches(): Promise<Branch[]> {
    return await branchModel.find();
  }

  async getBranch(id: Types.ObjectId): Promise<Branch> {
    return (await branchModel.findById(id)) as Branch;
  }
}

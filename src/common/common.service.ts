import { Service } from "typedi";
import { commonModel } from "./schemas/common.schema";

@Service()
export class CommonService {
  async getCommons() {
    return await commonModel.find({});
  }
}

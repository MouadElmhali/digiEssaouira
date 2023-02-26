import { Service } from "typedi";
import { Graduates } from "./models/graduates.model";
import { graduatesModel } from "./schemas/graduates.schema";

@Service()
export class GraduatesService {
  async getGraduates(): Promise<Graduates[]> {
    return await graduatesModel.find();
  }

  async getGraduatesById(id: string): Promise<Graduates> {
    return (await graduatesModel.findById(id)) as Graduates;
  }
}

import { Types } from "mongoose";
import { Service } from "typedi";
import { Association } from "./models/association.model";
import { associationModel } from "./schemas/association.schema";

@Service()
export class AssociationService {
  async getAssociation(): Promise<Association[]> {
    return await associationModel.find();
  }

  async getAssociationByRegionId(id: string): Promise<Association[]> {
    return await associationModel.find({ region: id });
  }

  async getAssociationById(id: string): Promise<Association> {
    return (await associationModel.findById(id)) as Association;
  }
}

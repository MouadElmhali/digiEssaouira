import { Types } from "mongoose";
import { Service } from "typedi";
import { Party } from "./models/party.model";
import { partyModel } from "./schemas/party.schema";

@Service()
export class PartyService {
  async getParties(): Promise<Party[]> {
    return await partyModel.find();
  }

  async getParty(id: Types.ObjectId): Promise<Party> {
    return (await partyModel.findById(id)) as Party;
  }
}

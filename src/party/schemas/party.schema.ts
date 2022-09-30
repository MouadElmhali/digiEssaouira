import { model, models, Schema } from "mongoose";
import { schemasNames } from "../../constants";

export interface IParty {
  name: string;
  pictureUrl: string;
}

const partySchema = new Schema<IParty>({
  name: { type: String, required: true, unique: true },
  pictureUrl: { type: String, required: true },
});

partySchema.set("timestamps", { createdAt: true, updatedAt: true });

export const partyModel =
  models.Party || model<IParty>(schemasNames.party, partySchema);

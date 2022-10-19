import { model, models, Schema } from "mongoose";
import { schemasNames } from "../../constants";

export interface IHuman {
  firstName: string;
  lastName: string;
  pictureUrl: string;
}

export const humanSchema = new Schema<IHuman>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    pictureUrl: { type: String },
  },
  { discriminatorKey: "type", collection: "users" }
);

export const humanModel =
  models.User || model<IHuman>(schemasNames.user, humanSchema);

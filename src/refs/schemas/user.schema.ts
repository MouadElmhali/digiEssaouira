import { model, models, Schema } from "mongoose";
import { schemasNames } from "../../constants";

export interface IUser {
  firstName: string;
  lastName: string;
  pictureUrl: string;
}

export const userSchema = new Schema<IUser>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    pictureUrl: { type: String },
  },
  { discriminatorKey: "type" }
);

export const userModel =
  models.User || model<IUser>(schemasNames.user, userSchema);

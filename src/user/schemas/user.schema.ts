import { Schema, model, models, Types } from "mongoose";
import { schemasNames } from "../../constants";

interface IUser {
  userName: string;
  email: string;
  password: string;
  token: string;
}

const userSchema = new Schema<IUser>({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  token: { type: String },
});

userSchema.set("timestamps", { createdAt: true, updatedAt: true });

export const userModel =
  models.User || model<IUser>(schemasNames.user, userSchema);

import { Schema, model, models, Types } from "mongoose";
import { schemasNames } from "../../constants";

interface IAccount {
  userName: string;
  email: string;
  password: string;
  token?: string;
}

const accountSchema = new Schema<IAccount>({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  token: { type: String },
});

accountSchema.set("timestamps", { createdAt: true, updatedAt: true });

export const accountModel =
  models.Account || model<IAccount>(schemasNames.account, accountSchema);

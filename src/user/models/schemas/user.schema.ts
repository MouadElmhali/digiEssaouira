import { models, Schema } from "mongoose";
import { schemasNames } from "../../../constants";
import { humanModel, IHuman } from "../../../refs/schemas/human.schema";

export interface IUser extends IHuman {
  email: string;
  password: string;
}

export const userModel =
  models.User ||
  humanModel.discriminator(
    schemasNames.user,
    new Schema<IUser>({
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
    })
  );

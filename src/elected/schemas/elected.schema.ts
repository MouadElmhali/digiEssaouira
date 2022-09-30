import mongoose, { Schema, model, models, Types } from "mongoose";
import { EGender } from "../../../types/enums";
import { schemasNames } from "../../constants";

export interface IElected {
  firstName: string;
  lastName: string;
  gender: EGender;
  post: Types.ObjectId;
  party: Types.ObjectId;
  phoneNumber: string;
  branch: Types.ObjectId;
  pictureUrl?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const electedSchema = new Schema<IElected>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  gender: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  post: {
    type: Schema.Types.ObjectId,
    ref: schemasNames.post,
    required: true,
  },
  party: {
    type: Schema.Types.ObjectId,
    ref: schemasNames.party,
    required: true,
  },
  branch: {
    type: Schema.Types.ObjectId,
    ref: schemasNames.branch,
    required: true,
  },
  pictureUrl: { type: String },
  createdAt: Date,
  updatedAt: Date,
});

electedSchema.set("timestamps", { createdAt: true, updatedAt: true });

export const electedModel =
  models.Elected || model<IElected>(schemasNames.elected, electedSchema);

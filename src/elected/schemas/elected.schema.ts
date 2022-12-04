import { Schema, models, Types } from "mongoose";
import { EGender } from "../../../types/enums";
import { schemasNames } from "../../constants";
import { IHuman, humanModel } from "../../refs/schemas/human.schema";

export interface IElected extends IHuman {
  gender: EGender;
  post: Types.ObjectId;
  party: Types.ObjectId;
  phoneNumber: string;
  branch: Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
}

export const electedModel =
  models.Elected ||
  humanModel.discriminator(
    schemasNames.elected,
    new Schema<IElected>({
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
      createdAt: Date,
      updatedAt: Date,
    })
  );

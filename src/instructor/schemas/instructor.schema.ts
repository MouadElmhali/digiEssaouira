import { models, Schema, Types } from "mongoose";
import { schemasNames } from "../../constants";
import { IHuman, humanModel } from "../../refs/schemas/human.schema";

export interface IInstructor extends IHuman {
  post: Types.ObjectId;
}

export const instructorModel =
  models.Instructor ||
  humanModel.discriminator(
    schemasNames.instuctor,
    new Schema<IInstructor>({
      post: { type: Schema.Types.ObjectId, ref: schemasNames.post },
    })
  );

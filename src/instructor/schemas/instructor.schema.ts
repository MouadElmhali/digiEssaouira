import { models, Schema, Types } from "mongoose";
import { schemasNames } from "../../constants";
import { IUser, userModel } from "../../refs/schemas/user.schema";

export interface IInstructor extends IUser {
  post: Types.ObjectId;
}

export const instructorModel =
  models.Instructor ||
  userModel.discriminator(
    schemasNames.instuctor,
    new Schema<IInstructor>({
      post: { type: Schema.Types.ObjectId, ref: schemasNames.post },
    })
  );

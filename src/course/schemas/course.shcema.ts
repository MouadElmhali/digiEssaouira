import { model, models, Schema, Types } from "mongoose";
import { schemasNames } from "../../constants";
import { ISection, sectionSchema } from "./section.schema";

export interface ICourse {
  name: string;
  description: string;
  pictureUrl: string;
  sections: ISection[];
  instructor: Types.ObjectId;
}

const courseSchema = new Schema<ICourse>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  pictureUrl: { type: String, required: true },
  sections: {
    type: [sectionSchema],
    required: true,
    validate: (value: ISection[]) => value.length > 0,
  },
  instructor: {
    type: Schema.Types.ObjectId,
    ref: schemasNames.instuctor,
    required: true,
  },
});

courseSchema.set("timestamps", { createdAt: true, updatedAt: true });

export const courseModel =
  models.Course || model<ICourse>(schemasNames.course, courseSchema);

import { Schema, model, models, Types } from "mongoose";
import { schemasNames } from "../../constants";

interface IGraduates {
  post: string;
  name: string;
  bio: string;
  pictureUrl: string;
}

const graduatesSchema = new Schema<IGraduates>({
  post: { type: String, required: false },
  name: { type: String, required: true },
  bio: { type: String, required: true },
  pictureUrl: { type: String, required: true },
});

graduatesSchema.set("timestamps", { createdAt: true, updatedAt: true });

export const graduatesModel =
  models.Graduates ||
  model<IGraduates>(schemasNames.graduates, graduatesSchema);

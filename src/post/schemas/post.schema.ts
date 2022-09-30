import { Schema, model, models, Types } from "mongoose";
import { schemasNames } from "../../constants";

interface IPost {
  name: string;
}

const postSchema = new Schema<IPost>({
  name: { type: String, required: true },
});

postSchema.set("timestamps", { createdAt: true, updatedAt: true });

export const postModel =
  models.Post || model<IPost>(schemasNames.post, postSchema);

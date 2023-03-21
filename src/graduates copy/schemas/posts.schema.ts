import { Schema, model, models, Types } from "mongoose";
import { schemasNames } from "../../constants";

interface IPosts {
  name: string;
  pictureUrl: string;
}

const postsSchema = new Schema<IPosts>({
  name: { type: String, required: true },
  pictureUrl: { type: String, required: true },
});

postsSchema.set("timestamps", { createdAt: true, updatedAt: true });

export const postsModel =
  models.Posts ||
  model<IPosts>(schemasNames.posts, postsSchema);

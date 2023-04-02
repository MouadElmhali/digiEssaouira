import { Schema, model, models, Types } from "mongoose";
import { schemasNames } from "../../constants";

interface IArticle {
  name: string;
  pictureUrl: string;
  title: string;
  text: string;
}

const articleSchema = new Schema<IArticle>({
  name: { type: String, required: true },
  pictureUrl: { type: String, required: true },
  title: { type: String, required: true },
  text: { type: String, required: true },
});

articleSchema.set("timestamps", { createdAt: true, updatedAt: true });

export const articleModel =
  models.Article || model<IArticle>(schemasNames.article, articleSchema);

import { Schema, model, models, Types } from "mongoose";
import { schemasNames } from "../../constants";

interface IArticle {
  title: string;
  body: string;
  pictureUrl: string;
}

const articleSchema = new Schema<IArticle>({
  title: { type: String, required: true },
  body: { type: String, required: true },
  pictureUrl: { type: String, required: true },
});

articleSchema.set("timestamps", { createdAt: true, updatedAt: true });

export const articleModel =
  models.Article || model<IArticle>(schemasNames.article, articleSchema);

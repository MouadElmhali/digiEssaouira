import { Schema, model, models, Types } from "mongoose";
import { schemasNames } from "../../constants";

interface IYouthArticle {
  title: string;
  body: string;
  pictureUrl: string;
  videoUrl: string;
}

const youthArticleSchema = new Schema<IYouthArticle>({
  title: { type: String, required: true },
  body: { type: String, required: true },
  pictureUrl: { type: String, required: true },
  videoUrl: { type: String, required: false },
});

youthArticleSchema.set("timestamps", { createdAt: true, updatedAt: true });

export const youthArticleModel =
  models.YouthArticle || model<IYouthArticle>(schemasNames.youthArticle, youthArticleSchema);

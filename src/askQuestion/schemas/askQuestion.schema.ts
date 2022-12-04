import { Schema, model, models, Types } from "mongoose";
import { schemasNames } from "../../constants";

interface IAsk {
  object: string;
  elected: string;
  userName: string;
  email: string;
  message: string;
  xp: boolean;
}

const askQuestionSchema = new Schema<IAsk>({
  object: { type: String, required: true },
  elected: { type: String,required: false },
  userName: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  xp: { type: Boolean },
});

askQuestionSchema.set("timestamps", { createdAt: true, updatedAt: true });

export const askQuestionModel =
  models.AskQuestion ||
  model<IAsk>(schemasNames.askQuestion, askQuestionSchema);

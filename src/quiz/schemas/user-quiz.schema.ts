import { model, models, Schema, Types } from "mongoose";
import { schemasNames } from "../../constants";

export interface IAnswer {
  question: Types.ObjectId;
  givenAnswer: Types.ObjectId;
}

export interface IUserQuiz {
  user: Types.ObjectId;
  course: Types.ObjectId;
  answers: IAnswer[];
}

const answerSchema = new Schema<IAnswer>({
  question: Schema.Types.ObjectId,
  givenAnswer: Schema.Types.ObjectId,
});

export const userQuizSchema = new Schema<IUserQuiz>({
  user: { type: Schema.Types.ObjectId, ref: schemasNames.user },
  course: { type: Schema.Types.ObjectId, ref: schemasNames.course },
  answers: [answerSchema],
});

userQuizSchema.set("timestamps", { createdAt: true, updatedAt: true });

export const userQuizModel =
  models.UserQuiz || model<IUserQuiz>(schemasNames.userQuiz, userQuizSchema);

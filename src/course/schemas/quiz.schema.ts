import { Schema, Types } from "mongoose";

export interface IOption {
  option: string;
}

export interface IQuestion {
  question: string;
  options: IOption[];
  correctAnswer: Types.ObjectId;
}

export interface IQuiz {
  questions: IQuestion[];
}

export const optionSchema = new Schema<IOption>({
  option: String,
});

export const quizSchema = new Schema<IQuiz>({
  questions: [
    {
      question: String,
      options: [optionSchema],
      correctAnswer: Types.ObjectId,
    },
  ],
});

import { Schema, model, models } from "mongoose";

interface ICommon {
  name: string;
  pictureUrl: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const commonSchema = new Schema<ICommon>({
  name: { type: String, required: true, unique: true },
  pictureUrl: { type: String, required: true },
  createdAt: Date,
  updatedAt: Date,
});

commonSchema.set("timestamps", { createdAt: true, updatedAt: true });

export const commonModel =
  models.Common || model<ICommon>("Common", commonSchema);

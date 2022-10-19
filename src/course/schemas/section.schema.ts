import { Schema } from "mongoose";

export interface ISection {
  title: string;
  content: string[];
}

export const sectionSchema = new Schema<ISection>({
  title: { type: String },
  content: { type: [String] },
});

import { Schema } from "mongoose";

export interface ISection {
  content: string[];
}

export const sectionSchema = new Schema<ISection>({
  content: { type: [String] },
});

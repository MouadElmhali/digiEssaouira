import { Schema, model, models, Types } from "mongoose";
import { schemasNames } from "../../constants";

interface IAssociation {
  name: string;
  fieldOfWork: string;
  pictureUrl: string;
  region: Types.ObjectId;
  email: string;
  phone: string;
  facebook: string;
  twitter: string;
  instagram: string;
  pictureGallery: string[];
}

const associationSchema = new Schema<IAssociation>({
  name: { type: String, required: true },
  fieldOfWork: { type: String, required: true },
  pictureUrl: { type: String, required: true },
  region: { type: Schema.Types.ObjectId, ref: schemasNames.region },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  facebook: { type: String, required: true },
  twitter: { type: String, required: true },
  instagram: { type: String, required: true },
  pictureGallery: { type: [String], required: true },
});

associationSchema.set("timestamps", { createdAt: true, updatedAt: true });

export const associationModel =
  models.Association ||
  model<IAssociation>(schemasNames.association, associationSchema);

import { Schema, model, models, Types } from "mongoose";
import { schemasNames } from "../../constants";

interface IResource {
  name: string;
  image: string;
  url: string;
}

const resourceSchema = new Schema<IResource>({
  name: { type: String, required: true },
  image: { type: String, required: true },
  url: { type: String, required: true },
});

resourceSchema.set("timestamps", { createdAt: true, updatedAt: true });

export const resourceModel =
  models.Resource || model<IResource>(schemasNames.resource, resourceSchema);

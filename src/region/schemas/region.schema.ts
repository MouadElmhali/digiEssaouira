import { Schema, model, models, Types } from "mongoose";
import { schemasNames } from "../../constants";

interface IRegion {
  name: string;
  pictureUrl: string;
}

const regionSchema = new Schema<IRegion>({
  name: { type: String, required: true },
  pictureUrl: { type: String, required: true },
});

regionSchema.set("timestamps", { createdAt: true, updatedAt: true });

export const regionModel =
  models.Region || model<IRegion>(schemasNames.region, regionSchema);

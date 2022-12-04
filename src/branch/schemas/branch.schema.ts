import { Schema, model, models, Types } from "mongoose";
import { schemasNames } from "../../constants";

interface IBranch {
  name: string;
  pictureUrl: string;
}

const branchSchema = new Schema<IBranch>({
  name: { type: String, required: true },
  pictureUrl: { type: String, required: true },
});

branchSchema.set("timestamps", { createdAt: true, updatedAt: true });

export const branchModel =
  models.Branch || model<IBranch>(schemasNames.branch, branchSchema);

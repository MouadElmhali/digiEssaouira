import { Schema, model, models, Types } from "mongoose";
import { schemasNames } from "../../constants";

interface IGroup {
  name: string;
  title: string;
  branches: Types.ObjectId[];
}

const groupSchema = new Schema<IGroup>({
  name: { type: String, required: true },
  title: { type: String, required: true },
  branches: [{ type: Types.ObjectId, ref: schemasNames.branch }],
});

groupSchema.set("timestamps", { createdAt: true, updatedAt: true });

export const groupModel =
  models.Group || model<IGroup>(schemasNames.group, groupSchema);

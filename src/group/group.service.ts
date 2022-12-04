import { Service } from "typedi";
import { groupModel } from "./schemas/group.schema";
import { Group } from "./models/group.model";

@Service()
export class GroupService {
  async getGroups(): Promise<Group[]> {
    return await groupModel.find().populate("branches");
  }

  async getGroup(id: string): Promise<Group> {
    return (await groupModel.findById(id)) as Group;
  }
}

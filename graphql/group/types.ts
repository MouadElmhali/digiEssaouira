import { IBranch } from "../branch/types";

export interface IGroup {
  id: string;
  name: string;
  title: string;
  branches: IBranch[];
}

export interface IGetGroupsData {
  groups: IGroup[];
}

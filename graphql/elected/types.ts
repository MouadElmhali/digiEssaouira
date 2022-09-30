import { EGender } from "../../types/enums";
import { IParty } from "../party/types";
import { IPost } from "../post/types";

export interface IElected {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  post: IPost;
  gender: EGender;
  pictureUrl: string;
  party: IParty;
}

export interface IGetElectedsByBranchIdData {
  electedsByBranchId: IElected[];
}

export interface IGetElectedsByBranchIdVariables {
  args: { id: string };
}

export interface IGetElectedData {
  elected: IElected;
}

export interface IGetElectedVariables {
  args: { id: string };
}

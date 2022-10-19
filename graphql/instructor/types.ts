import { IHuman } from "../../src/refs/schemas/human.schema";
import { IPost } from "../post/types";

export interface IInstructor extends IHuman {
  post: IPost;
}

import { Service } from "typedi";
import { postModel } from "./schemas/post.schema";
import { Post } from "./models/post.model";
import { Types } from "mongoose";

@Service()
export class PostService {
  async getPosts(): Promise<Post[]> {
    return await postModel.find();
  }

  async getPost(id: Types.ObjectId): Promise<Post> {
    return (await postModel.findById(id)) as Post;
  }
}

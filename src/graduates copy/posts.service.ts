import { Service } from "typedi";
import { Posts } from "./models/Posts.model";
import { postsModel } from "./schemas/posts.schema";

@Service()
export class PostsService {
  async getPosts(): Promise<Posts[]> {
    return await postsModel.find();
  }

  async getPostsById(id: string): Promise<Posts> {
    return (await postsModel.findById(id)) as Posts;
  }
}

import { Query, Types } from "mongoose";
import { FieldResolver, Resolver, Root } from "type-graphql";
import { Service } from "typedi";
import { Post } from "../post/models/post.model";
import { PostService } from "../post/post.service";
import { Instructor } from "./models/instructor.model";

@Service()
@Resolver((type) => Instructor)
export class InstructorResolver {
  constructor(private readonly postService: PostService) {}

  @FieldResolver((type) => Post)
  async post(@Root("post") post: Types.ObjectId): Promise<Post> {
    return await this.postService.getPost(post);
  }


}

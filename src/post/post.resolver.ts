import { Query, Resolver } from "type-graphql";
import { Inject, Service } from "typedi";
import { PostService } from "./post.service";
import { Post } from "./models/post.model";

@Service()
@Resolver((of) => Post)
export class PostResolver {
  constructor(@Inject() private readonly postService: PostService) {}

  @Query((returns) => [Post])
  async posts(): Promise<Post[]> {
    return await this.postService.getPosts();
  }
}

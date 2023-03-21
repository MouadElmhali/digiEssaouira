import {
  Arg,
  FieldResolver,
  Query,
  Resolver,
  ResolverInterface,
  Root,
} from "type-graphql";
import { Inject, Service } from "typedi";
import { Posts } from "./models/posts.model";
import { PostsService } from "./posts.service";

@Service()
@Resolver((of) => Posts)
// @ts-ignore
export class PostsResolver implements ResolverInterface<Association> {
  constructor(
    @Inject() private readonly postsService: PostsService // @Inject() private readonly branchService: BranchService
  ) {}

  @Query((returns) => [Posts])
  async getPosts() {
    return await this.postsService.getPosts();
  }

  @Query((returns) => Posts)
  async getPostsById(@Arg("id") id: string) {
    return await this.postsService.getPostsById(id);
  }
}

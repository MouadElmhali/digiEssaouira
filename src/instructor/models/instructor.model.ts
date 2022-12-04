import { Field, ObjectType } from "type-graphql";
import { Post } from "../../post/models/post.model";
import { Human } from "../../refs/models/human.model";

@ObjectType()
export class Instructor extends Human {
  @Field((type) => Post)
  post!: Post;
}

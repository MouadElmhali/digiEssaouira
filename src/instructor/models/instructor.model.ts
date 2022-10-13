import { Field, ObjectType } from "type-graphql";
import { Post } from "../../post/models/post.model";
import { User } from "../../refs/models/user.model";

@ObjectType()
export class Instructor extends User {
  @Field((type) => Post)
  post!: Post;
}

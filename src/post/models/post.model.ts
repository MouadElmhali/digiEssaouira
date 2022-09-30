import { ObjectType, ID, Field } from "type-graphql";

@ObjectType()
export class Post {
  @Field((type) => ID!, { nullable: false })
  id!: string;

  @Field({ nullable: false })
  name!: string;
}

import { ObjectType, ID, Field } from "type-graphql";

@ObjectType()
export class Article {
  @Field((type) => ID!, { nullable: false })
  id!: string;

  @Field({ nullable: false })
  title!: string;

  @Field({ nullable: false })
  body!: string;

  @Field({ nullable: false })
  pictureUrl!: string;
}

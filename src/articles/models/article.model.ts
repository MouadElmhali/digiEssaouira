import { ObjectType, ID, Field } from "type-graphql";

@ObjectType()
export class Article {
  @Field((type) => ID!, { nullable: true })
  id!: string;

  @Field({ nullable: true })
  title!: string;

  @Field({ nullable: true })
  pictureUrl!: string;

  @Field({ nullable: true })
  text!: string;
}

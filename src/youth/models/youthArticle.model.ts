import { ObjectType, ID, Field } from "type-graphql";

@ObjectType()
export class YouthArticle {
  @Field((type) => ID!, { nullable: false })
  id!: string;

  @Field({ nullable: false })
  title!: string;

  @Field({ nullable: false })
  body!: string;

  @Field({ nullable: false })
  pictureUrl!: string;

  @Field({ nullable: false })
  videoUrl!: string;
}

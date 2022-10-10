import { ObjectType, ID, Field } from "type-graphql";

@ObjectType()
export class Region {
  @Field((type) => ID!, { nullable: false })
  id!: string;

  @Field({ nullable: false })
  name!: string;

  @Field({ nullable: false })
  pictureUrl!: string;
}

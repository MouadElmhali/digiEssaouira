import { ObjectType, ID, Field } from "type-graphql";

@ObjectType()
export class Resource {
  @Field((type) => ID!, { nullable: false })
  id!: string;

  @Field({ nullable: true })
  name!: string;

  @Field({ nullable: true })
  url!: string;
}

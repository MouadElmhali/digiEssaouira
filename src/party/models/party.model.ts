import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class Party {
  @Field((type) => ID)
  id!: string;

  @Field()
  name!: string;

  @Field()
  pictureUrl!: string;
}

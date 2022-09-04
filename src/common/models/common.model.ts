import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class Common {
  @Field(() => ID!)
  id!: string;

  @Field(() => String!)
  name!: string;

  @Field(() => String!)
  pictureUrl!: string;

  @Field(() => Date!)
  createdAt!: Date;

  @Field(() => Date!)
  updatedAt!: Date;
}

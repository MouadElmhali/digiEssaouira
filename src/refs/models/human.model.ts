import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Human {
  @Field()
  firstName!: string;

  @Field()
  lastName!: string;

  @Field()
  pictureUrl!: string;
}

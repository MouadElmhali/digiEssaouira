import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Human {
  @Field({ nullable: false })
  firstName!: string;

  @Field({ nullable: false })
  lastName!: string;

  @Field()
  pictureUrl!: string;
}

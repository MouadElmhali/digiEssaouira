import { ObjectType, ID, Field, InputType } from "type-graphql";

@ObjectType()
export class AskQuestion {
  @Field((type) => ID!, { nullable: false })
  id!: string;

  @Field({ nullable: false })
  object!: string;

  @Field({ nullable: true })
  elected!: string;

  @Field({ nullable: false })
  userName!: string;

  @Field({ nullable: false })
  email!: string;

  @Field({ nullable: false })
  message!: string;

  @Field({ nullable: false })
  xp!: boolean;
}

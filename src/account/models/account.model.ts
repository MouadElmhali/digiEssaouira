import { ObjectType, ID, Field, InputType } from "type-graphql";

@ObjectType()
export class Account {
  @Field((type) => ID!, { nullable: false })
  id!: string;

  @Field({ nullable: false })
  userName!: string;

  @Field({ nullable: false })
  email!: string;

  @Field({ nullable: false })
  password!: string;

  @Field()
  token!: string;
}

// @InputType()
// export class UserInput {
//   @Field()
//   userName!: string;

//   @Field()
//   email!: string;

//   @Field()
//   password!: string;
// }

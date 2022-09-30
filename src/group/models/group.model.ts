import { ObjectType, ID, Field } from "type-graphql";
import { Branch } from "../../branch/models/branch.model";

@ObjectType()
export class Group {
  @Field((type) => ID!, { nullable: false })
  id!: string;

  @Field({ nullable: false })
  name!: string;

  @Field({ nullable: false })
  title!: string;

  @Field((type) => [Branch!]!, { nullable: false })
  branches!: [Branch];
}

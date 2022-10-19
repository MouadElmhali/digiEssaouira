import { Field, ID, ObjectType } from "type-graphql";
import { EGender } from "../../../types/enums";
import { Branch } from "../../branch/models/branch.model";
import { Party } from "../../party/models/party.model";
import { Human } from "../../refs/models/human.model";

@ObjectType()
export class Elected extends Human {
  @Field(() => ID!)
  id!: string;

  @Field(() => String!)
  gender!: EGender;

  @Field(() => String!)
  title!: string;

  @Field(() => Branch!)
  branch!: Branch;

  @Field(() => Party!)
  party!: Party;

  @Field(() => String!)
  phoneNumber!: string;

  @Field(() => Date!)
  createdAt!: Date;

  @Field(() => Date!)
  updatedAt!: Date;
}

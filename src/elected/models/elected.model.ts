import { Field, ID, ObjectType } from "type-graphql";
import { EGender } from "../../../types/enums";
import { Branch } from "../../branch/models/branch.model";
import { Party } from "../../party/models/party.model";

@ObjectType()
export class Elected {
  @Field(() => ID!)
  id!: string;

  @Field(() => String!)
  firstName!: string;

  @Field(() => String!)
  lastName!: string;

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

  @Field(() => String!)
  pictureUrl!: string;

  @Field(() => Date!)
  createdAt!: Date;

  @Field(() => Date!)
  updatedAt!: Date;
}

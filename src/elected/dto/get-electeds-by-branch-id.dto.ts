import { Field, InputType } from "type-graphql";
import { IsNotEmpty, IsString } from "class-validator";

@InputType()
export class GetElectedsByBranchIdDto {
  @Field()
  @IsString()
  @IsNotEmpty()
  id!: string;
}

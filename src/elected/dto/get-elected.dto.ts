import { IsNotEmpty, IsString } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class GetElectedDto {
  @Field()
  @IsString()
  @IsNotEmpty()
  id!: string;
}

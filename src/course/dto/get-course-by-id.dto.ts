import { IsNotEmpty, IsString } from "class-validator";
import { Field, InputType } from "type-graphql";
import { errorMessages } from "../../messages/validation-messages";

@InputType()
export class IGetCourseByIdDto {
  @Field()
  @IsNotEmpty({ message: errorMessages.empty })
  @IsString({ message: errorMessages.notString })
  id!: string;
}

import { Field, ID, InputType } from "type-graphql";

@InputType()
export class IGetQuizByCourseIdDto {
  @Field((type) => ID)
  id!: string;
}

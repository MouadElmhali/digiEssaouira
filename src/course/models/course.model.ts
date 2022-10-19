import { Field, ObjectType, ID } from "type-graphql";
import { Instructor } from "../../instructor/models/instructor.model";
import { Section } from "./section.model";

@ObjectType()
export class Course {
  @Field((type) => ID)
  id!: string;

  @Field({ nullable: false })
  name!: string;

  @Field({ nullable: false })
  description!: string;

  @Field({ nullable: false })
  pictureUrl!: string;

  @Field((type) => [Section])
  sections!: Section[];

  @Field((type) => Instructor)
  instructor!: Instructor;
}

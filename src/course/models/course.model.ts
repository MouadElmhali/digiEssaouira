import { Field, ObjectType, ID } from "type-graphql";
import { Instructor } from "../../instructor/models/instructor.model";
import { Quiz } from "./quiz.model";

@ObjectType()
export class Section {
  @Field()
  title!: string;

  @Field((type) => [String])
  content!: string[];
}

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

  @Field((type) => Quiz)
  quiz!: Quiz;
}

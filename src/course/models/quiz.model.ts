import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class Option {
  @Field((type) => ID)
  id!: string;

  @Field()
  option!: string;
}

@ObjectType()
export class Question {
  @Field((type) => ID)
  id!: string;

  @Field()
  question!: string;

  @Field((type) => [Option])
  options!: Option[];

  @Field((type) => ID)
  correctAnswer!: string;
}

@ObjectType()
export class Quiz {
  @Field((type) => [Question])
  questions!: Question[];
}

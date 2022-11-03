import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class Answer {
  @Field((type) => ID)
  question!: string;

  @Field((type) => ID)
  givernAnswer!: string;
}

@ObjectType()
export class UserQuiz {
  @Field((type) => ID)
  user!: string;

  @Field((type) => ID)
  course!: string;

  @Field((type) => [Answer])
  answers!: Answer[];
}

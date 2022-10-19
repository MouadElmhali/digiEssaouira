import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Section {
  @Field()
  title!: string;

  @Field((type) => [String])
  content!: string[];
}

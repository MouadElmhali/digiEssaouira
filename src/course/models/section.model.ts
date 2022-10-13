import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Section {
  @Field((type) => [String])
  content!: string[];
}

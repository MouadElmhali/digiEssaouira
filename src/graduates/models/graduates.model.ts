import { ObjectType, ID, Field } from "type-graphql";

@ObjectType()
export class Graduates {
  @Field((type) => ID!, { nullable: false })
  id!: string;

  @Field({ nullable: false })
  post!: string;

  @Field({ nullable: false })
  name!: string;

  @Field({ nullable: false })
  bio!: string;

  @Field({ nullable: false })
  pictureUrl!: string;

  @Field({ nullable: true })
  facebook!: string;

  @Field({ nullable: true })
  instagram!: string;

  @Field({ nullable: true })
  gmail!: string;

}

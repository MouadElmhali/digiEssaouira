import { ObjectType, ID, Field, InputType } from "type-graphql";
import { Region } from "../../region/models/region.model";

@ObjectType()
export class Association {
  @Field((type) => ID!)
  readonly id!: string;

  @Field(() => String!)
  region!: String;

  @Field({ nullable: false })
  name!: string;

  @Field({ nullable: false })
  fieldOfWork!: string;

  @Field({ nullable: false })
  prisident!: string;

  @Field({ nullable: false })
  pictureUrl!: string;

  @Field()
  email!: string;

  @Field()
  phone!: string;

  @Field()
  facebook!: string;

  @Field()
  twitter!: string;

  @Field()
  instagram!: string;

  @Field(() => [String])
  pictureGallery!: string[];
}

@InputType()
export class AssociationInput {

  @Field((type) => ID!)
  readonly id!: string;

  @Field(() => String!)
  region!: String;

  @Field({ nullable: false })
  name!: string;

  @Field({ nullable: false })
  fieldOfWork!: string;

  @Field({ nullable: false })
  prisident!: string;

  @Field({ nullable: false })
  pictureUrl!: string;

  @Field()
  email!: string;

  @Field()
  phone!: string;

  @Field()
  facebook!: string;

  @Field()
  twitter!: string;

  @Field()
  instagram!: string;

  @Field(() => [String])
  pictureGallery!: string[];
}

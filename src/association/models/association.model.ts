import { ObjectType, ID, Field } from "type-graphql";
import { Region } from "../../region/models/region.model";

@ObjectType()
export class Association {
  @Field((type) => ID!, { nullable: false })
  id!: string;

  @Field(() => Region!)
  region!: Region;

  @Field({ nullable: false })
  name!: string;

  @Field({ nullable: false })
  fieldOfWork!: string;

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

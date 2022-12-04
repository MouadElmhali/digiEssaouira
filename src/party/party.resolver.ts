import { Query, Resolver } from "type-graphql";
import { Service } from "typedi";
import { Party } from "./models/party.model";
import { PartyService } from "./party.service";

@Service()
@Resolver()
export class PartyResolver {
  constructor(private readonly partyService: PartyService) {}

  @Query((returns) => [Party])
  async parties() {
    return await this.partyService.getParties();
  }
}

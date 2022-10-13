import "reflect-metadata";
import { NextApiRequest, NextApiResponse } from "next";
import { ApolloServer } from "apollo-server-micro";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { buildSchema } from "type-graphql";
import Container from "typedi";

import { ElectedResolver } from "../../src/elected/elected.resolver";
import { connectToDatabase } from "../../src/mongodb";
import { BranchResolver } from "../../src/branch/branch.resolver";
import { GroupResolver } from "../../src/group/group.resolver";
import { PartyResolver } from "../../src/party/party.resolver";
import { RegionResolver } from "../../src/region/region.resolver";
import { AssociationResolver } from "../../src/association/association.resolver";
import { CourseResolver } from "../../src/course/course.resolver";

const schema = await buildSchema({
  resolvers: [
    ElectedResolver,
    BranchResolver,
    GroupResolver,
    PartyResolver,
    RegionResolver,
    AssociationResolver,
    CourseResolver,
  ],
  container: Container,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const server = new ApolloServer({
  schema,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  csrfPrevention: true,
});

(async () => await connectToDatabase())();
const startServer = server.start();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await startServer;
  await server.createHandler({ path: "/api/graphql" })(req, res);
}

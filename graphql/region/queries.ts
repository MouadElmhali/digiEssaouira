import { gql } from "apollo-server-core";

export const GET_REGION = gql`
  query {
    regions {
      id
      name
      pictureUrl
    }
  }
`;

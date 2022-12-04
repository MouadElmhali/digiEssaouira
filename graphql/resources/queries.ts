import { gql } from "apollo-server-core";

export const GET_RESOURCES = gql`
  query {
    resources {
      id
      name
      url
    }
  }
`;

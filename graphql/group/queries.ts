import { gql } from "apollo-server-core";

export const GET_GROUPS = gql`
  query {
    groups {
      id
      name
      title
      branches {
        id
        name
        pictureUrl
      }
    }
  }
`;

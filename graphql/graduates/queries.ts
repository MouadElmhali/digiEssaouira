import { gql } from "apollo-server-core";

export const GET_GRADUATES = gql`
  query {
    getGraduates {
      id
      post
      name
      pictureUrl
    }
  }
`;
export const GET_GRADUATES_BY_ID = gql`
  query ($id: String!) {
    getGraduatesById(id: $id) {
      id
      post
      name
      bio
      pictureUrl
      facebook
      gmail
      instagram
    }
  }
`;

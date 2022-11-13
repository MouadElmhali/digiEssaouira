import { gql } from "apollo-server-core";

export const GET_ELECTED = gql`
  query ($args: GetElectedDto!) {
    elected(id: $args) {
      id
      firstName
      lastName
      phoneNumber
      pictureUrl
      post {
        name
      }
      party {
        name
      }
    }
  }
`;

export const GET_ELECTEDs = gql`
  query {
    electeds {
      id
      firstName
      lastName
    }
  }
`;

export const GET_ELECTEDS_BY_BRANCH_ID = gql`
  query ($args: GetElectedsByBranchIdDto!) {
    electedsByBranchId(id: $args) {
      id
      firstName
      lastName
      phoneNumber
      gender
      post {
        name
      }
      pictureUrl
      party {
        name
        pictureUrl
      }
    }
  }
`;

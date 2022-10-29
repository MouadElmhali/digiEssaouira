import { gql } from "apollo-server-core";

export const REGISTER = gql`
  mutation register($user: UserInput) {
    register(user: $user) {
      id
      userName
    }
  }
`;

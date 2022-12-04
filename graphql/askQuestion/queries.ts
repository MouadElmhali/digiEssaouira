import { gql } from "apollo-server-core";

export const ASK = gql`
  mutation ask(
    $object: String!
    $elected: String!
    $userName: String!
    $email: String!
    $message: String!
    $xp: Boolean!
  ) {
    ask(
      object: $object
      elected: $elected
      userName: $userName
      email: $email
      message: $message
      xp: $xp
    ) {
      id
    }
  }
`;

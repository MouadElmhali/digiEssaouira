import { gql } from "apollo-server-core";

export const REGISTER = gql`
  mutation register($email: String!, $userName: String!, $password: String!) {
    register(email: $email, userName: $userName, password: $password) {
      id
      userName
    }
  }
`;

export const LOGIN = gql`
  query ($email: String!, $password: String!) {
    login(email: $email,  password: $password)
  }
`;

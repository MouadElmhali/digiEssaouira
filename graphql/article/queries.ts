import { gql } from "@apollo/client";

export const GET_ARTICLES = gql`
query {
  articles{
    id,
    title,
    pictureUrl 
  }
}
`;
import { gql } from "@apollo/client";

export const GET_ARTICLES = gql`
query {
  articles{
    id,
    title, 
    body, 
    pictureUrl
  }
}
`;

export const GET_ARTICLE_BY_ID = gql`
  query ($id: String!) {
    article (id : $id) {
        id,
        title ,
        body ,
        pictureUrl
    }
  }
`;

// export const GET_ARTICLE_BY_ID = gql`
//   query ($id: String!) {
//     getGraduatesById(id: $id) {
//       id,
//       title, 
//       body, 
//       pictureUrl
//     }
//   }
// `;

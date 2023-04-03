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
<<<<<<< HEAD
=======

>>>>>>> dd659bd0cda708cfc0878ead504fd3b5a9862826

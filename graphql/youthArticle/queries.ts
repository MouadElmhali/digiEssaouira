import { gql } from "@apollo/client";

export const GET_YOUTHARTICLES = gql`
query {
  youthArticles{
    id,
    title, 
    body, 
    pictureUrl,
    videoUrl
  }
}
`;

// export const GET_ARTICLE_BY_ID = gql`
//   query ($id: String!) {
//     youthArticle (id : $id) {
//         id
//         title 
//         body 
//         pictureUrl
//         videoUrl
//     }
//   }
// `;

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
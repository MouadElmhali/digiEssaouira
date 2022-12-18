import { gql } from "apollo-server-core";

export const GET_ASSOCIATION_BY_REGION = gql`
  query ($id: String!) {
    getAssociationByRegionId(id: $id) {
      id
      name
      pictureUrl
      email
      phone
      pictureGallery
    }
  }
`;
export const GET_ASSOCIATION_BY_ID = gql`
  query ($id: String!) {
    getAssociationById(id: $id) {
      id
      name
      fieldOfWork
      pictureUrl
      email
      phone
      pictureGallery
    }
  }
`;

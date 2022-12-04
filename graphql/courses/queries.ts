import { gql } from "apollo-server-core";

export const GET_COURSES_NAME_AND_PICTURE = gql`
  query {
    courses {
      id
      name
      pictureUrl
    }
  }
`;

export const GET_COURSE_BY_ID = gql`
  query ($args: IGetCourseByIdDto!) {
    course(args: $args) {
      id
      name
      pictureUrl
      description
      sections {
        title
        content
      }
      instructor {
        firstName
        lastName
        pictureUrl
        post {
          name
        }
      }
    }
  }
`;

export const GET_QUIZ_BY_COURSE_ID = gql`
  query ($args: IGetQuizByCourseIdDto!) {
    quizByCourseId(args: $args) {
      questions {
        id
        question
        options {
          id
          option
        }
        correctAnswer
      }
    }
  }
`;

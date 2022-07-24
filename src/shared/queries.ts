import { gql } from "@apollo/client";

export const GET_MICROS = gql`
  query GetMicros {
    micros {
      id
      title
      content
      date
    }
  }
`;

export const ADD_MICRO = gql`
  mutation AddMicro($title: String!, $content: String!, $date: String!) {
    addMicro(title: $title, content: $content, date: $date) {
      title
      content
      date
      id
    }
  }
`;

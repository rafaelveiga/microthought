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

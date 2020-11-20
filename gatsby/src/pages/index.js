import React from "react";
import { graphql } from 'gatsby';

export default function Home({ data }) {
  console.log(data.allSanityProduct.nodes);
  return (
    <>
      <h1>I'm the homepage</h1>
    </>
  )
}

export const query = graphql`
  query MyQuery {
      allSanityProduct {
      nodes {
        description
        id
        image {
          asset {
            fluid {
              src
            }
          }
        }
        name
        price
        slug {
          current
        }
      }
    }
  }
`;
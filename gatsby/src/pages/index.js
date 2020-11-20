import React, {useEffect} from "react";
import { graphql } from 'gatsby';
import ProductGrid from "../components/ProductGrid";

export default function Home({ data }) {
  const products = data.allSanityProduct.nodes;
  console.log(products);

  // Change the close button in the cart when it contains items
  useEffect(() => {
      if (window.Snipcart) {
        window.Snipcart.api.configure('show_continue_shopping', true);
      }
  }, []);
  
  return (
    <>
      <h1>I'm the homepage</h1>
      <ProductGrid products={products} />
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
            fixed(width: 200, height: 200) {
                ...GatsbySanityImageFixed
            }
            fluid(maxWidth: 10) {
                ...GatsbySanityImageFluid
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
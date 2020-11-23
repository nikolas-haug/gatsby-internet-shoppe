import React from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

export default function singleProductPage({ data }) {
    console.log(data);
    const product = data.product;
    return (
        <>
            <div className="row margin-top">
                <div className="col-med-2">
                    <Img fluid={product.image.asset.fluid} alt={product.name}/>
                </div>
                <div className="col-med-8">
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                </div>
                <div className="col-med-2">
                    <p>{product.price}</p>
                    <button>Add to cart</button>
                </div>
            </div>
        </>
    )
}

// this needs to be dynamic based on the slug from context
export const query = graphql`
    query($slug: String!) {
        product: sanityProduct(slug: {
            current: {
                eq: $slug
            }
        }) {
            id
            name
            image {
                asset {
                    fluid(maxWidth: 800) {
                        ...GatsbySanityImageFluid
                    }
                }
            }
            slug {
                current
            }
            price
            description
        }
    }
`;
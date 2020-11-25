import React from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import formatMoney from '../utils/formatMoney';

export default function singleProductPage({ data }) {
    console.log(data);
    const product = data.product;
    const productPrice = formatMoney(data.product.price);
    console.log(productPrice.replace('$', ''));
    return (
        <div className="container-med">
            <div className="row margin-top">
                <div className="col-med-2">
                    <Img fluid={product.image.asset.fluid} alt={product.name}/>
                </div>
                <div className="col-med-10">
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <button className="snipcart-add-item"
                        data-item-id={product.id}
                        data-item-price={formatMoney(product.price).replace('$', '')}
                        data-item-url={product.slug.current}
                        data-item-description={product.description}
                        data-item-image={product.image.asset.fluid.src}
                        data-item-name={product.name}
                    >
                        Add to cart
                    </button>
                    <p>{formatMoney(product.price)}</p>
                </div>
            </div>
        </div>
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
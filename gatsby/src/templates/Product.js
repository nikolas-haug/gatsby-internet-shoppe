import React, { useState } from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import formatMoney from '../utils/formatMoney';

export default function SingleProductPage({ data }) {
    console.log(data);
    const product = data.product;

    const [selected, setSelected] = useState(product.sizes[0]);

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
                        data-item-price={`14.00`}
                        data-item-url={`/product/${product.slug.current}`}
                        data-item-description={product.description}
                        data-item-image={product.image.asset.fluid.src}
                        data-item-name={product.name}
                        data-item-custom1-name={product.sizes ? 'Size' : ''}
                        data-item-custom1-options={product.sizes ? product.sizes.join('|') : ''}
                        data-item-custom1-value={product.sizes ? selected : ''}
                        // data-item-custom1-options="Black|Brown|Gold"
                    >
                        Add to cart
                    </button>
                    <div>
                        <p>Avaiable in these sizes:</p>
                        {
                            product.sizes.map((size) => {
                               return <span>{size} </span>
                            })
                        }
                    </div>
                    <div>
                        <select id="sizes" onChange={(e) => setSelected(e.target.value)} value={selected}>
                            {
                                product.sizes.map((size, index) => (
                                    <option key={index}>{size}</option>
                                ))
                            }
                        </select>
                    </div>
                    <p>{formatMoney(product.price)}</p>
                </div>
            </div>
        </div>

                        // <Dropdown
                        // id={item.frontmatter.customField.name}
                        // onChange={(e) => this.setSelected(e.target.value)}
                        // value={this.state.selected}>
                        // {item.frontmatter.customField.values.map((option) => (<DropdownOption key={option.name}>{option.name}</DropdownOption>))}
                        // </Dropdown>
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
            sizes
        }
    }
`;
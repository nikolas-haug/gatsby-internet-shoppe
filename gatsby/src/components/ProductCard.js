import React from 'react';
import Img from 'gatsby-image';

export default function ProductCard({ product }) {
    return (
        <div className="col-sm-6 col-med-4">
            <div className="card">
                <div className="card__image">
                    <Img fluid={product.image.asset.fluid} alt={product.name} />
                </div>
                <div className="card__content">
                    <span className="card__title">{product.name}</span>
                    <p>{product.description}</p>
                </div>
                <div className="card__action">
                    <button className="snipcart-add-item"
                        data-item-id={product.id}
                        data-item-price={product.price}
                        data-item-url={product.slug.current}
                        data-item-description={product.description}
                        data-item-image={product.image.asset.fluid.src}
                        data-item-name={product.name}
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    )
}
import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

export default function ProductCard({ product }) {
    return (
        <div className="col-sm-6 col-med-4">
            <div className="card">
                <div className="card__image">
                    <Img fluid={product.image.asset.fluid} alt={product.name} />
                </div>
                <div className="card__content">
                    <Link to={`/product/${product.slug.current}`}>
                        <span className="card__title">{product.name}</span>
                    </Link>
                    <p>{product.description}</p>
                </div>
            </div>
        </div>
    )
}
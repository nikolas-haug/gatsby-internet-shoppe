import React from 'react';
import ProductCard from './ProductCard';

export default function ProductGrid({ products }) {
    return (
        <>
            <div className="row">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </>
    )
}
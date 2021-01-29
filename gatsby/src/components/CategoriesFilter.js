import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

function countProductsInCategories(products) {
    // return the products with counts
    const counts = products
        .map((product) => product.category)
        .flat()
        .reduce((acc, category) => {
            // check if this is an existing category
            const existingCategory = acc[category.id];
            // if it is, increment by 1
            if(existingCategory) {
                existingCategory.count += 1;
            }
            // otherwise create a new entry in our acc and set it to one
            else {
                acc[category.id] = {
                    id: category.id,
                    name: category.name,
                    count: 1
                }
            }
            return acc;
        }, {})
        // sort them based on their count
        const sortedCategories = Object.values(counts).sort((a, b) => b.count - a.count);
        return sortedCategories;
}

export default function CategoriesFilter({ activeCategory }) {
    // get a list of all the categories
    // get a list of all the products with their categories
    const { categories, products } = useStaticQuery(graphql`
        query {
            categories: allSanityCategory {
                nodes {
                    name
                }
            }
            products: allSanityProduct {
                nodes {
                    category {
                        id
                        name
                    }
                }
            }
        }
    `);
    console.clear();
    // count how many products are in each category
    const categoriesWithCounts = countProductsInCategories(products.nodes);
    console.log(categoriesWithCounts);
    // loop over the list of categories and display the count of products in the category
    // link it up... 
    return (
        <div className="category__wrapper">
            <Link to={"/"}>
                <span className="name">All</span>
                <span className="count">{products.nodes.length}</span>
            </Link>
            {categoriesWithCounts.map(category => (
                <Link key={category.id} to={`/category/${(category.name).toLowerCase()}`} className={category.name === activeCategory ? 'active' : ''}>
                    <span className="name">{category.name}</span>
                    <span className="count">{category.count}</span>
                </Link>
            ))}
        </div>
    )
}
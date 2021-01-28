import path from 'path';

async function turnProductsIntoPages({ graphql, actions }) {
    // 1. get template for this page
    const productTemplate = path.resolve('./src/templates/Product.js');
    // 2. query all products
    const { data } = await graphql(`
        query {
            products: allSanityProduct {
                nodes {
                    id
                    name
                    slug {
                        current
                    }
                }
            }
        }
    `);
    console.log(data);
    // 3. loop over each product and cretae a page for it
    data.products.nodes.forEach(product => {
        console.log('creating a page for ' + product.name);
        actions.createPage({
            // url for the new page
            path: `product/${product.slug.current}`,
            component: productTemplate,
            context: {
                slug: product.slug.current
            }
        })
    })
}

async function turnCategoriesIntoPages({ graphql, actions }) {
    // 1. get the template
    const categoriesTemplate = path.resolve('./src/pages/index.js');
    // 2. query all the categories
    const { data } = await graphql(`
        query {
            categories: allSanityCategory {
                nodes {
                    id
                    name
                }
            }
        }
    `);
    // 3. createpage for that category
    data.categories.nodes.forEach((category) => {
        console.log(`creating page for category`, category.name);
        actions.createPage({
            // url for the new page
            path: `category/${(category.name).toLowerCase()}`,
            component: categoriesTemplate,
            context: {
                category: category.name
            }
        })
    });
    // 4. pass category data to index.js
}

export async function createPages(params) {
    // create pages dynamically
    // wait for all promises to be resolved before finishing this function
    await Promise.all([
        // 1. products
        turnProductsIntoPages(params),
        // 2. categories
        turnCategoriesIntoPages(params)
    ])
}
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

export async function createPages(params) {
    // create pages dynamically
    // 1. products
    await turnProductsIntoPages(params);
}
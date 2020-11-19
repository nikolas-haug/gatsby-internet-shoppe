export default {
    // Computer name
    name: 'product',
    // Visible title
    title: 'Prodcuts',
    type: 'document',
    icon: ()=> '📚',
    // Define all the fields here
    fields: [
        {
            name: 'name',
            title: 'Product Name',
            type: 'string',
            description: 'Name of the product',
            validation: Rule => Rule.required()
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name'
            }
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
            description: 'Price of the product in cents',
            validation: Rule => Rule.min(500)
            // TODO: add custom input component
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'Add a product description'
        }
    ]
}
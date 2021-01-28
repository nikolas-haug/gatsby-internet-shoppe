import PriceInput from '../components/PriceInput';

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
            },
            validation: Rule => Rule.required()
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            },
            validation: Rule => Rule.required()
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
            description: 'Price of the product in cents',
            validation: Rule => Rule.required().min(500),
            // TODO: add custom input component
            inputComponent: PriceInput
        },
        {
            title: 'Variants',
            name: 'variants',
            type: 'array',
            // validation: Rule => Rule.required().min(1),
            of: [
              {
                title: 'Variant',
                type: 'productVariant'
              }
            ]
          },
          {
            title: 'Sizes',
            name: 'sizes',
            type: 'array',
            validation: Rule => Rule.required().min(1),
            of: [{type: 'string'}],
            options: {
                list: [
                  {title: 'XLarge', value: 'xlarge'},
                  {title: 'Large', value: 'large'},
                  {title: 'Medium', value: 'medium'},
                  {title: 'Small', value: 'small'}
                ]
              }
          },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'Add a product description',
            validation: Rule => Rule.required()
        },
        {
            name: 'category',
            title: 'Product Category',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'category' }] }],
            validation: Rule => Rule.required().min(1),
        }
    ]
}
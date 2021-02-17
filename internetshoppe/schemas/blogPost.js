export default {
    // Computer name
    name: 'blogPost',
    // Visible title
    title: 'Blog Post',
    type: 'document',
    icon: ()=> '📄',
    // Define all the fields here
    fields: [
        {
            name: 'title',
            title: 'Post Title',
            type: 'string',
            description: 'title of the blog poist',
            validation: Rule => Rule.required()
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title'
            },
            validation: Rule => Rule.required()
        },
        {
            name: 'content',
            title: 'Post Content',
            type: 'blockContent'
        }
    ]
}
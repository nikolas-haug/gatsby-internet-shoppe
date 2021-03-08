export default {
    widgets: [
        // { name: 'project-info', layout: { width: 'auto' } },
        // { name: 'project-users' },
        { name: 'structure-menu' },
        {
            name: 'document-list',
            options: {
                title: 'Last edited products',
                order: '_updatedAt desc',
                types: ['product']
            }
        },
        {
            name: 'document-list',
            options: {
                title: 'Last edited documents',
                order: '_updatedAt desc'
            }
        }

    ]
}
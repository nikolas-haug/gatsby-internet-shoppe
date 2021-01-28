import { FaDelicious as icon } from 'react-icons/fa';

export default {
    // computer name
    name: 'category',
    // visible title
    title: 'Category',
    type: 'document',
    icon,
    fields: [
        {
            name: 'name',
            title: 'Category Name',
            type: 'string',
            description: 'what is the name of the category?'
        }
    ]
}
import React from 'react';
import { graphql } from 'gatsby';
import PortableText from '@sanity/block-content-to-react';

export default function Test({ data }) {
    console.log(data);
    return (
        <>
            <h1>test page</h1>
            <PortableText blocks={data.allSanityBlogPost.nodes[0].content} />
        </>
    )
}

export const query = graphql`
    query {
        allSanityBlogPost {
            nodes {
            title
            content {
                _key
                _type
                style
                list
                _rawChildren
                }
            }
        }
    }
`;
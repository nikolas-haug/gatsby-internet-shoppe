import React, { useState } from 'react';
import { graphql } from 'gatsby';
import BlogPost from '../components/BlogPost';

export default function Blog({ data }) {
    const posts = data.allPostsJson.edges;
    console.log(posts);
    return (
        <>
            <h1>blog</h1>
            <div className="row">
                {
                    posts.map((post) => (
                        <BlogPost key={post.node.id} post={post.node} />
                    ))
                }
            </div>
        </>
    )
}

export const query = graphql`
    query {
        allPostsJson {
            edges {
                node {
                    title
                    url
                    id
                }
            }
        }
    }
`;
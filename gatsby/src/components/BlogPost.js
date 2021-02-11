import React from 'react';

export default function BlogPost({ post, delay }) {
    return (
        <>
            <div className="blogpost col-med-4" style={{ animationDelay: `${delay * 100}ms` }}>
                <img src={post.url} alt="" className="img-100" />
                <p>{post.title}</p>
            </div>
        </>
    )
}
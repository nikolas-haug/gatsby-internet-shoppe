import React from 'react';

export default function BlogPost({ post }) {
    return (
        <>
            <div className="blogpost col-med-4">
                <img src={post.url} alt="" className="img-100" />
                <p>{post.title}</p>
            </div>
        </>
    )
}
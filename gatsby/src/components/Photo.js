import React from 'react';

export default function BlogPost({ photo, delay }) {

    return (
        <>
            <div className="photo col-med-4" style={{ animationDelay: `${delay * 100}ms` }}>
                <img src={photo.url} alt="" className="img-100" />
                <p>INDEX: {delay}</p>
            </div>
        </>
    )
}
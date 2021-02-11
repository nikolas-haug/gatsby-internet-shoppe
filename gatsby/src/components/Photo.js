import React from 'react';

export default function BlogPost({ photo, delay }) {

    return (
        <>
            <div className="photo" style={{ animationDelay: `${delay * 100}ms` }}>
                <img src={photo.url} alt="" className="img-cover" />
                {/* <p>INDEX: {delay}</p> */}
            </div>
        </>
    )
}
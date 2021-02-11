import React, { useState, useEffect, useRef } from 'react';
import { graphql } from 'gatsby';
import Photo from '../components/Photo';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

export default function Photos({ data }) {
    const photos = data.allPhotosJson.edges;

    const [list, setList] = useState([...photos.slice(0, 10)]);
    const [loadMore, setLoadMore] = useState(false);
    const [hasMore, setHasMore] = useState(photos.length > 10);
    const [extendedList, setExtendedList] = useState(list.length);

    const loadRef = useRef();

    // Handle intersection with load more div
    const handleObserver = (entities) => {
        console.log(entities);
        const target = entities[0]
        if (target.isIntersecting) {
        setLoadMore(true)
        }
    }

    //Initialize the intersection observer API
    useEffect(() => {
        var options = {
            root: null,
            rootMargin: "20px",
            threshold: 1.0,
        }
        const observer = new IntersectionObserver(handleObserver, options)
            if (loadRef.current) {
            observer.observe(loadRef.current)
        }
    }, [])

    useEffect(() => {
        if(loadMore && hasMore) {
            const currentLength = list.length;
            const isMore = currentLength < photos.length;
            const nextResults = isMore ? photos.slice(currentLength, currentLength + 10) : [];
            setExtendedList(currentLength);
            setList([...list, ...nextResults]); 
            setLoadMore(false);
        }
    }, [loadMore, hasMore]); // eslint-disable-line

    //Check if there is more
    useEffect(() => {
        const isMore = list.length < photos.length;
        setHasMore(isMore);
    }, [list]); //eslint-disable-line

    // Load more button click
    const handleLoadMore = () => {
        setLoadMore(true)
    }

    return (
        <>
            <h1>blog</h1>
            <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
                <Masonry gutter="15px">
                    {
                        list.map((photo, i) => (
                            <Photo key={photo.node.id} photo={photo.node} delay={list.length == extendedList ? i : i - extendedList} />
                        ))
                    }
                </Masonry>
            </ResponsiveMasonry>
            {/* <div className="row justify-content-center margin-top margin-bottom">
                {hasMore ? (
                    <button onClick={handleLoadMore}>Load More</button>
                    ) : (
                    <p>No more results</p>
                )}
            </div> */}
            <div ref={loadRef} className="row justify-content-center margin-top margin-bottom">
                {hasMore ? <p>Loading...</p> : <p>No more results</p>}
            </div>
        </>
    )
}

export const query = graphql`
    query {
        allPhotosJson {
            edges {
                node {
                    id
                    url
                }
            }
        }
    }
`;
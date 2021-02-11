import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import BlogPost from '../components/BlogPost';

export default function Blog({ data }) {
    const posts = data.allPostsJson.edges;

    const [list, setList] = useState([...posts.slice(0, 10)]);
    console.log(list);
    const [loadMore, setLoadMore] = useState(false);
    const [hasMore, setHasMore] = useState(posts.length > 10);

    const [extendedList, setExtendedList] = useState(list.length);
    console.log(extendedList);

    useEffect(() => {
        if(loadMore && hasMore) {
            const currentLength = list.length;
            const isMore = currentLength < posts.length;
            const nextResults = isMore ? posts.slice(currentLength, currentLength + 10) : [];
            console.log('currentLength', currentLength);
            console.log('nextResults', nextResults);
            setExtendedList(currentLength);
            setList([...list, ...nextResults]); 
            setLoadMore(false);
        }
    }, [loadMore, hasMore]); // eslint-disable-line

    //Check if there is more
    useEffect(() => {
        const isMore = list.length < posts.length;
        setHasMore(isMore);
    }, [list]); //eslint-disable-line

    // Load more button click
    const handleLoadMore = () => {
        setLoadMore(true)
    }

    // create an array for delay times
    const makeDelayArray = () => {
        let delayArr = [];
        for(let i = 0; i < 10; i++) {
            delayArr.push(i);
        }
        return delayArr;
    }

    console.log(makeDelayArray());

    return (
        <>
            <h1>blog</h1>
            <div className="row">
                {
                    list.map((post, i) => (
                        <BlogPost key={post.node.id} post={post.node} delay={list.length == 10 ? i : i - extendedList} />
                    ))
                }
            </div>
            <div className="row justify-content-center margin-top margin-bottom">
                {hasMore ? (
                    <button onClick={handleLoadMore}>Load More</button>
                    ) : (
                    <p>No more results</p>
                )}
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
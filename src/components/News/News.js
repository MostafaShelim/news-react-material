
import React from 'react';
import MediaCard from './MediaCard';

const News = (props) => {
    const {news} = props.newsItem;
    return (
        <div style = {{marginBottom:'10px', border: '2px solid #ccc'}}>
            <MediaCard news={props.newsItem}></MediaCard>
        </div>
    );
};

export default News;
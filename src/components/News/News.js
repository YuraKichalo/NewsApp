import React from "react";
import PropTypes from 'prop-types';
import './News.css';
import NewsList from "./NewsList/NewsList";

const News = ({ news, getNewsByCategory }) => {
    return (
        <div className='news'>
            <h1>News in USA 🇺🇸</h1>
            <h3>Choose Sub-category</h3>
            <div className='sub-categories'>
                <button onClick={() => getNewsByCategory('business')} className="small ui grey button">business</button>
                <button onClick={() => getNewsByCategory('entertainment')} className="small ui grey button">entertainment</button>
                <button onClick={() => getNewsByCategory('health')} className="small ui grey button">health</button>
                <button onClick={() => getNewsByCategory('science')} className="small ui grey button">science</button>
                <button onClick={() => getNewsByCategory('sports')} className="small ui grey button">sports</button>
                <button onClick={() => getNewsByCategory('technology')} className="small ui grey button">technology</button>
            </div>
            <NewsList news={news} />
        </div>
    );
};

News.propTypes = {
    news: PropTypes.array.isRequired,
    getNewsByCategory: PropTypes.func.isRequired
};

export default News;
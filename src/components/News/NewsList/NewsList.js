import React from "react";
import PropTypes from 'prop-types';
import NewsItem from "../NewsItem/NewsItem";

const NewsList = ({ news }) => {
    const renderNews = () => {
        return news.map(item => {
            return <NewsItem key={item.title} item={item} />
        });
    };

    return (
        <div className='ui items'>
            {renderNews()}
        </div>
    );
};

NewsList.propTypes = {
    news: PropTypes.array.isRequired
};

export default NewsList;
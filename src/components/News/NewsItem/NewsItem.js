import React from "react";
import PropTypes from 'prop-types';

const NewsItem = ({ item }) => {
    return (
        <div className='newsItem item'>
            <div className="image">
                <img src={item.urlToImage ? item.urlToImage : 'https://images.regulation.gov.ua/default/default.jpg'} />
            </div>
            <div className="content">
                <a className="header" href={item.url} target='_blank'>{item.title}</a>
                <div className="meta">
                    <span>{item.description}</span>
                </div>
                <div className="description">
                    <p>{item.content}</p>
                </div>
                <div className="extra">
                    {item.author}
                </div>
            </div>
        </div>
    );
};

NewsItem.propTypes = {
    item: PropTypes.object.isRequired
};

export default NewsItem;
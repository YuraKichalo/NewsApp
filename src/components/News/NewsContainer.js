import React, {useEffect} from "react";
import {connect} from "react-redux";
import PropTypes from 'prop-types';

import News from "./News";
import {getNews} from "../../redux/newsReducer";
import Loader from "../../common/components/Loader/Loader";
import {getCategory, receiveNews, getCurrentPage, getTotalItemsCount} from "../../common/selectors/news";

const NewsContainer = (props) => {
    useEffect(() => {
        props.getNews(props.category, props.currentPage);
    }, []);

    if (props.news.length === 0) {
        return <Loader/>
    }

    return <News
        news={props.news}
        currentPage={props.currentPage}
        totalItemsCount={props.totalItemsCount}
        getNews={props.getNews}
        currentCategory={props.category}
    />
};

const mapStateToProps = state => {
    return {
        news: receiveNews(state),
        category: getCategory(state),
        currentPage: getCurrentPage(state),
        totalItemsCount: getTotalItemsCount(state)
    };
};

NewsContainer.propTypes = {
    getNews: PropTypes.func.isRequired,
    news: PropTypes.array.isRequired,
    category: PropTypes.string.isRequired,
    currentPage: PropTypes.number,
    totalItemsCount: PropTypes.number
}

export default connect(mapStateToProps, {getNews})(NewsContainer);
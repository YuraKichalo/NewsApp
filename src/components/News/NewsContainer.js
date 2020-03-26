import React, {useEffect} from "react";
import {connect} from "react-redux";
import PropTypes from 'prop-types';

import News from "./News";
import {getNews} from "../../redux/newsReducer";
import Loader from "../../common/components/Loader/Loader";

const NewsContainer = (props) => {
    useEffect(() => {
        props.getNews(props.category);
    }, []);

    const getNewsByCategory = category => {
        if (category !== props.category) {
            props.getNews(category);
        }
    };

    if (props.news.length === 0) {
        return <Loader/>
    }

    return <News
        news={props.news}
        getNewsByCategory={getNewsByCategory}/>
};

const mapStateToProps = state => {
    return {
        news: state.newsPage.newsList,
        category: state.newsPage.category
    };
};

NewsContainer.propTypes = {
    getNews: PropTypes.func.isRequired,
    news: PropTypes.array.isRequired,
    category: PropTypes.string.isRequired
}

export default connect(mapStateToProps, {getNews})(NewsContainer);
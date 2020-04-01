import React, {useState, useEffect} from "react";
import PropTypes from 'prop-types';
import Pagination from "react-js-pagination";
import './News.css';
import NewsList from "./NewsList/NewsList";

const News = ({ news, currentPage, totalItemsCount, getNews, currentCategory }) => {
    const [category, setCategory] = useState(currentCategory);

    useEffect(() => {
        getNews(category, 1)
    }, [category]);


    const handlePageChange = (currentPage) => {
        getNews(category, currentPage)
    }

    return (
        <div className='news'>
            <h1>News in USA 🇺🇸</h1>
            <h3>Choose Sub-category</h3>
            <div className='sub-categories'>
                <button onClick={() => setCategory('business')} className="small ui grey button">business</button>
                <button onClick={() => setCategory('entertainment')} className="small ui grey button">entertainment</button>
                <button onClick={() => setCategory('health')} className="small ui grey button">health</button>
                <button onClick={() => setCategory('science')} className="small ui grey button">science</button>
                <button onClick={() => setCategory('sports')} className="small ui grey button">sports</button>
                <button onClick={() => setCategory('technology')} className="small ui grey button">technology</button>
            </div>
            <NewsList news={news} />
            <div className='paginator-container'>
                <Pagination
                    activePage={currentPage}
                    itemsCountPerPage={10}
                    totalItemsCount={totalItemsCount}
                    pageRangeDisplayed={7}
                    onChange={handlePageChange}
                />
            </div>
        </div>
    );
};

News.propTypes = {
    news: PropTypes.array.isRequired,
    currentPage: PropTypes.number,
    totalItemsCount: PropTypes.number,
    getNews: PropTypes.func.isRequired,
    currentCategory: PropTypes.string.isRequired
};

export default React.memo(News);
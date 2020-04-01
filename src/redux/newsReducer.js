import { newsApi } from "../api/api";

const SET_NEWS = 'SET_NEWS';
const SET_CATEGORY = 'SET_CATEGORY';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_ITEMS_COUNT = 'SET_TOTAL_ITEMS_COUNT';

const initialState = {
    newsList: [],
    category: 'business',
    currentPage: 1,
    totalItemsCount: 0
};


const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS:
            return { ...state, newsList: action.news };
        case SET_CATEGORY:
            return { ...state, category: action.category };
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage };
        case SET_TOTAL_ITEMS_COUNT:
            return { ...state, totalItemsCount: action.totalItemsCount };
        default:
            return state;
    }
};

const setNews = news => ({ type: SET_NEWS, news });
const setCategory = category => ({ type: SET_CATEGORY, category });
const setCurrentPage = currentPage => ({ type: SET_CURRENT_PAGE, currentPage });
const setTotalItemsCount = totalItemsCount => ({ type: SET_TOTAL_ITEMS_COUNT, totalItemsCount });

export const getNews = (category, currentPage) => (dispatch) => {
    // setting category from 'business' to 'business'
    dispatch(setCategory(category));
    // setting currentPage from 1 to 1
    dispatch(setCurrentPage(currentPage));

    return newsApi.getNews(category, currentPage).then(data => {
            dispatch(setTotalItemsCount(data.totalResults)); // 70
            dispatch(setNews(data.articles));
        })
};

export default newsReducer;
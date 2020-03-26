import { newsApi } from "../api/api";

const SET_NEWS = 'SET_NEWS';
const SET_CATEGORY = 'SET_CATEGORY';

const initialState = {
    newsList: [],
    category: 'business'

};

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS:
            return { ...state, newsList: action.news };
        case SET_CATEGORY:
            return { ...state, category: action.category };
        default:
            return state;
    }
};

const setNews = news => ({ type: SET_NEWS, news });
const setCategory = category => ({ type: SET_CATEGORY, category });

export const getNews = category => (dispatch) => {
    dispatch(setCategory(category));

    return newsApi.getNews(category).then(data => {
            dispatch(setNews(data.articles));
        })
};

export default newsReducer;
export const receiveNews = state => {
    return state.newsPage.newsList
};

export const getCategory = state => {
    return state.newsPage.category
};

export const getCurrentPage = state => {
    return state.newsPage.currentPage
};

export const getTotalItemsCount = state => {
    return state.newsPage.totalItemsCount
};


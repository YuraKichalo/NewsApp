import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'http://newsapi.org/v2/',
    headers: {
        'X-Api-Key': 'd53176e0272044d58e5972b993a3c636'
    }
});

export const newsApi = {
    getNews(category, currentPage) {
        return instance.get(`top-headlines?country=us&pageSize=10&page=${currentPage}&category=${category}`)
            .then(response => {
                if (response.status === 200) return response.data;
            })
    }
};
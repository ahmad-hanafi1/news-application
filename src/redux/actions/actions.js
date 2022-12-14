import { actionTypes } from "../actionTypes/actionTypes";
import axios from 'axios';

export const fetchNews = (API) => (dispatch) => {
    axios.get(API)
        .then(response => {
            response.data.articles.map((article, index) => {
                article.id = index
                return article
            })

            dispatch( {
                type: actionTypes.FETCH_NEWS,
                payload: response.data,
            })
        })
        .catch(console.log)
}

export const fetchLatestNews = () => (dispatch) => {
    const date = new Date();
    date.setDate(date.getDate())
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
        axios.get(`https://newsapi.org/v2/everything?q=breaking%20news&from=${year}-${month}-${day}&sortBy=publishedAt&apiKey=e1b9d1fd041645a1aeb497405363fe97&language=en`)
            .then(response => {
                response.data.articles.map((article, index) => {
                    article.id = index + 1000
                    return article
                })
                dispatch( {
                    type: actionTypes.FETCH_LATEST_NEWS,
                    payload: response.data,
                })
            })
            .catch(console.log)
}

export const removeAllNews = () => {
    return {
        type: actionTypes.REMOVE_ALL_NEWS,
    }
}

export const setAPIValue = (category= 'general', countryValue='international') => {
    return {
        type: actionTypes.SET_API_VALUE,
        payload: { categoryValue: category, countryValue: countryValue,}
    }
}

export const setAPIValueSearch = (searchValue = '') => {
    return {
        type: actionTypes.SET_API_VALUE_SEARCH,
        payload: {searchValue: searchValue}
    }
}


export const setSearchValue = (value) => {
    return {
        type: actionTypes.SET_SEARCH_VALUE,
        payload: value,
    }
}

export const setCategroyValue = (value) => {
    return {
        type: actionTypes.SET_CATEGORY_VALUE,
        payload: value,
    }
}


export const setCountryValue = (value) => {
    return {
        type: actionTypes.SET_COUNTRY_VALUE,
        payload: value,
    }
}




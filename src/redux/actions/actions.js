import { actionTypes } from "../actionTypes/actionTypes";
import axios from 'axios';


const APIKEY = "2a25e35c43d64e2b93904f5128daca9b"


export async function addAllNews() {

     
}

export const fetchNews = (API) => {

    return async (dispatch, getState ) => {
        const response = await axios.get(API)
        .catch(err => {console.log('error')})
        
        response.data.articles.map((article, index) => {
            article.id = index 
            return article
        })

        dispatch( {
            type: actionTypes.FETCH_NEWS,
            payload: response.data,
        })
    }
}

export const fetchLatestNews = () => {
    const date = new Date();
    date.setDate(date.getDate())
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return async (dispatch, getState ) => {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=breaking news&from=${year}-${month}-${day}&sortBy=publishedAt&apiKey=2a25e35c43d64e2b93904f5128daca9b&language=en`)
        .catch(err => {console.log('error')})
        response.data.articles.map((article, index) => {
            article.id = index + 1000
            return article
        })
        dispatch( {
            type: actionTypes.FETCH_LATEST_NEWS,
            payload: response.data,
        })
    }
}
// const response = await axios.get(`https://newsapi.org/v2/everything?from=${year}-${month}-${day}&sortBy=popularity&apiKey=${APIKEY}`)


export const removeAllNews = () => {
    return {
        type: actionTypes.REMOVE_ALL_NEWS,
    }
}

export const setNewsId = () => {
    return {
        type: actionTypes.SET_NEWS_ID
    }
}

export const setLatestNewsId = () => {
    return {
        type: actionTypes.SET_LATESTNEWS_ID
    }
}




export const setAPIValue = (category= 'general', countryValue='us') => {
    return {
        type: actionTypes.SET_API_VALUE,
        payload: {countryValue: countryValue, categoryValue: category, }
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




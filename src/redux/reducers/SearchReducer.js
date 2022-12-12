import { actionTypes } from '../actionTypes/actionTypes'


const initialState = {

    searchValue: '',
    categoryValue: '',
    countryValue: '',
    API: '',

}



const SearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_SEARCH_VALUE:
            return {...state, searchValue: action.payload}

        case actionTypes.SET_CATEGORY_VALUE:
            return {...state, categoryValue: action.payload}

        case actionTypes.SET_COUNTRY_VALUE:
            return {...state, countryValue: action.payload}
        
        case actionTypes.SET_API_VALUE:
            return {...state, API: `https://newsapi.org/v2/everything?q=${action.payload.countryValue} AND ${action.payload.categoryValue}&apiKey=2a25e35c43d64e2b93904f5128daca9b&language=en`}
                                    
                                    // `https://newsapi.org/v2/top-headlines?apiKey=9f18c7ed0bfa45db8ca53a10f00962c1&category=${action.payload.categoryValue}&country=${action.payload.countryValue}`
        case actionTypes.SET_API_VALUE_SEARCH:
            return {...state, API: `https://newsapi.org/v2/everything?q=${action.payload.searchValue}&apiKey=2a25e35c43d64e2b93904f5128daca9b&language=en`}

        default:
            return state

    }


}


export default SearchReducer;
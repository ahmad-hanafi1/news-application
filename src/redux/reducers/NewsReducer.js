import { actionTypes } from '../actionTypes/actionTypes'

const initialState = {
    news: [],
}



const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_NEWS:
            return {...state, 
                news: action.payload,
            }

        case actionTypes.REMOVE_ALL_NEWS:
            return {
                news: [],
            }

        default: 
            return state
    }
} 


export default newsReducer;
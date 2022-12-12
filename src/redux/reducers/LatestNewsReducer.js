import { actionTypes } from '../actionTypes/actionTypes'

const initialState = {

    latestNews: [],

}



const latestNewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_LATEST_NEWS:
            return {...state, 
                latestNews: action.payload,
            }

        case actionTypes.REMOVE_ALL_NEWS:
            return state


        default: 
            return state
    }
} 


export default latestNewsReducer;
import { combineReducers } from "redux";
import latestNewsReducer from "./LatestNewsReducer";
import newsReducer from "./NewsReducer";
import SearchReducer from "./SearchReducer";



const rootReducer = combineReducers({
    news: newsReducer,
    latestNews: latestNewsReducer,
    search: SearchReducer,

})


export default rootReducer;

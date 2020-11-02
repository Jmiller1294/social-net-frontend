import { combineReducers } from "redux";


const rootReducer = combineReducers({
  reviews: reviewReducer,
  restaurants: restaurantReducer
})
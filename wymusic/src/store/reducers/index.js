import {combineReducers} from 'redux'
import DiscoverReducer from './discover'
import * as  videoReduce from "./video/index"//viedeo reducers
console.log(videoReduce)
let reducer= combineReducers({
    discover:DiscoverReducer,
    ...videoReduce
})

export default reducer;
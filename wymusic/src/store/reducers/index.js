import {combineReducers} from 'redux'
import DiscoverReducer from './discover'

let reducer= combineReducers({
    discover:DiscoverReducer,
})

export default reducer;
import {combineReducers} from 'redux'
import DiscoverReducer from './discover'
import my from './discovermy'
let reducer= combineReducers({
    discover:DiscoverReducer,
    my,
})

export default reducer;
import {combineReducers} from 'redux'
import DiscoverReducer from './discover'
import PlayerReducer from './player'

let reducer= combineReducers({
    discover:DiscoverReducer,
    player:PlayerReducer
})

export default reducer;
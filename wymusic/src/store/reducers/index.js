
import {combineReducers} from 'redux'
import DiscoverReducer from './discover';
//歌单
import playList from './playList';

let reducer= combineReducers({
    discover:DiscoverReducer,
    playList
})

export default reducer;

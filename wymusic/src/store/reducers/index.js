
import {combineReducers} from 'redux'
import DiscoverReducer from './discover';
import radioStation from "./radioReducers/radioStation";
//歌单
import playList from './playList';

let reducer= combineReducers({
    discover:DiscoverReducer,
    playList,
    radioStation
})

export default reducer;


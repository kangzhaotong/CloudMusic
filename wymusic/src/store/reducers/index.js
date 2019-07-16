import {combineReducers} from 'redux'
import DiscoverReducer from './discover'
//播放器
import PlayerReducer from './player'
//歌单
import playList from './playList';

let reducer = combineReducers({
    discover: DiscoverReducer,
    player: PlayerReducer,
    playList
})


export default reducer;

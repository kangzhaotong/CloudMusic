import {combineReducers} from 'redux'
import DiscoverReducer from './discover'
//播放器
import PlayerReducer from './player'
//歌单
import playList from './playList';
import radioStation from "./radioReducers/radioStation";
import RankReducers from "./rank"
//新碟
import AlbumList from "./AlbumList";

let reducer = combineReducers({
    discover: DiscoverReducer,
    player: PlayerReducer,
    playList,
    radioStation,
    Rank:RankReducers,
    AlbumList
})


export default reducer;


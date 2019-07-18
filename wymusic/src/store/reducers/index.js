import {combineReducers} from 'redux'
import DiscoverReducer from './discover'
//播放器
import PlayerReducer from './player'
//歌单、专辑
import playList from './playList';
import radioStation from "./radioReducers/radioStation";
//新碟
import AlbumList from "./AlbumList";
//朋友
import friend from './friend';

let reducer = combineReducers({
    discover: DiscoverReducer,
    player: PlayerReducer,
    playList,
    radioStation,
    AlbumList,
    friend
})


export default reducer;


import {combineReducers} from 'redux'
import DiscoverReducer from './discover'
//播放器
import PlayerReducer from './player'
//歌单、专辑
import playList from './playList';
import radioStation from "./radioReducers/radioStation";
import RankReducers from "./rank"
//新碟
import AlbumList from "./AlbumList";
//朋友
import friend from './friend';

import my from './discovermy';
//是否显示加载中
import loading from './isLoading';

let reducer = combineReducers({
    discover: DiscoverReducer,
    player: PlayerReducer,
    playList,
    radioStation,
    AlbumList,
    friend,
    Rank:RankReducers,
    my,
    loading
})


export default reducer;


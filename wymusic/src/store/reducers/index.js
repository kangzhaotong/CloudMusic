import {combineReducers} from 'redux'
import DiscoverReducer from './discover'
import * as  videoReduce from "./video/index"//viedeo reducers    
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
import userInfo from './userReducer';

let reducer = combineReducers({
    discover: DiscoverReducer,
    player: PlayerReducer,
    playList,
    radioStation,
    AlbumList,
    friend,
    Rank:RankReducers,
    my,
    loading,
    userInfo,
    ...videoReduce
})
export default reducer;


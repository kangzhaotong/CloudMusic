import {
    combineReducers
} from "redux";
import musicList from '../../state/playlist/MusicList'
import musicListDetail from '../../state/playlist/musicListDetail';
import {GET_MUSIC_LIST_DETAIL} from '../../actionType/playlist'
import {GET_MUSIC_LIST} from '../../actionType/playlist'

//find页面，歌单页面，歌单（默认类别全部）
function changeMusicList(state=musicList,action) {
    state = JSON.parse(JSON.stringify(state));
    if(action.type === GET_MUSIC_LIST){
        state.musicList=action.playlists;
    }
    return state;
}
//find页面，歌单，歌单详情（包含歌单列表）
function changeMusicListDetail(state=musicListDetail,action){
    state = JSON.parse(JSON.stringify(state));
    if(action.type===GET_MUSIC_LIST_DETAIL){
        // state.musicListDetailTit=action.payload.playlistTit;
        state.musicListDetail=action.payload.playlist
    }
    return state;
}

export default combineReducers({
    changeMusicList,
    changeMusicListDetail
})
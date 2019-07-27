import {combineReducers} from 'redux';
import {GET_SONG_BY_ID} from '../../actionType/song';
import {GET_LYRIC_BY_ID} from '../../actionType/song';
import songData from '../../state/song/songPlay'
import lyricData from '../../state/song/lyric'

//歌曲信息
function changeSongById(state=songData,action){
    state = JSON.parse(JSON.stringify(state));
    if(action.type===GET_SONG_BY_ID){
        state.songData=action.data
    }
    return state;
}
//歌词信息
function changeLyricById(state=lyricData,action){
    state = JSON.parse(JSON.stringify(state));
    if(action.type===GET_LYRIC_BY_ID){
        state.lyricData=action.data
    }
    return state;
}
export default combineReducers({
    changeSongById,
    changeLyricById
})
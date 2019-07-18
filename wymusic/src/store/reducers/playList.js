/* 歌单 */
import initState from '../state/playList';
import {PLAYlISTDETAIL, NEWSONGLIST} from '../actionType/playList';

export default function (state=initState, {type, payload}) {
    state = JSON.parse(JSON.stringify(state));
    if(type === PLAYlISTDETAIL) {
        //歌单列表详情
        state.playListDetail = payload.playListDetail;
    } else if(type === NEWSONGLIST) {
        //新专辑列表
        state.newSongList = payload.data;
    }
    return state;
}
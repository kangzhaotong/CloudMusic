/* 歌单 */
import initState from '../state/playList';
import {PLAYlISTDETAIL, ALBUMLIST} from '../actionType/playList';

export default function (state=initState, {type, payload}) {
    state = JSON.parse(JSON.stringify(state));

    if(type === PLAYlISTDETAIL) {
        //歌单列表详情
        state.playListDetail = payload.playListDetail;
    } else if(type === ALBUMLIST) {
        //新专辑列表
        state.albumList = payload.data;
    }
    
    return state;
}
/* 歌单 */
import initState from '../state/playList';
import {PLAYlISTDETAIL} from '../actionType/playList';

export default function (state=initState, {type, payload}) {
    state = JSON.parse(JSON.stringify(state));
    if(type === PLAYlISTDETAIL) {
        state.playListDetail = payload.playListDetail;
    }
    return state;
}
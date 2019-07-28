import initState from '../state/fridend';
import {GETFRIENDS} from '../actionType/friend';

export default function (state=initState, {type, payload}) {
    state = JSON.parse(JSON.stringify(state));

    if(type === GETFRIENDS) {
        state.event = state.event.concat(payload.event);
        state.lasttime = payload.lasttime;
    } 

    return state;
}
import userState from '../state/userInfo';
import {CHANGEUSERINFO, CHANGE_USERINFO_TOKEN} from "../actionType/userInfo";

export default function (state = userState, {type, payload}) {
    state = JSON.parse(JSON.stringify(state))
    if (type === CHANGEUSERINFO) {
        state.avatarUrl = payload.avatarUrl;
        state.nickname = payload.nickname;
    } else if(type === CHANGE_USERINFO_TOKEN) {
        localStorage.clear();
        localStorage.userId = payload.userId;
        state.avatarUrl = localStorage.avatarUrl;
        state.nickname = localStorage.nickname;
    }
    return state;
}
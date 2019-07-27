import userState from '../state/userInfo'

export default function (state = userState, {type, payload}) {
    state = JSON.parse(JSON.stringify(state))
    if (type === 'CHANGE_USERINFO_TOKEN') {
        state.userInfo = payload.userInfo;
        state.token = payload.token
    }else if(type === 'CHANGE_MLIST'){
        state.musicList = payload.musicList
    }else if(type === 'CHANGE_SUB_COUNT'){
        state.subcount = payload.subcount
    }
    return state;
}
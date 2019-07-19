import userState from '../state/userInfo'
export default function (state = userState, {type, payload}) {
    state = JSON.parse(JSON.stringify(state))
    if (type === 'CHANGE_USERINFO_TOKEN') {
        state.userInfo = payload.userInfo;
        state.token = payload.token
    }
    return state;
}
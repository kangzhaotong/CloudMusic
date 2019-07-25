import {CHANGEISLOADING} from '../actionType/isLoading';
import initState from '../state/isLoading';

export default (state=initState, {type, payload}) => {
    state = JSON.parse(JSON.stringify(state));

    if(type === CHANGEISLOADING) {
        state.isLoading = payload.isLoading;
    }
    return state;
}
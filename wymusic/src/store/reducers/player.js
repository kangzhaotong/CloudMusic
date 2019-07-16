import initState from "../state/player"
import {GETSONGPLAY} from "../actionType/player"

let reducer = (state = initState,{type,payload})=>{
    state = JSON.parse(JSON.stringify(state));
    if(type === GETSONGPLAY){
        state.song = payload.song;
    }
    return state;
}

export default reducer;
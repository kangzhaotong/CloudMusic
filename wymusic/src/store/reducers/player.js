import initState from "../state/player"
import {GETSONGDETAIL, GETSONGLyric, GETSONGPLAY,GETSONGLYRIC} from "../actionType/player"

let reducer = (state = initState,{type,payload})=>{
    state = JSON.parse(JSON.stringify(state));
    if(type === GETSONGPLAY){
        state.song = payload.song;
    }
    if(type === GETSONGDETAIL){
        state.songDetail = payload.songDetail;
    }
    if(type === GETSONGLYRIC){
        state.songLyric = payload.songLyric;
    }
    return state;
}

export default reducer;
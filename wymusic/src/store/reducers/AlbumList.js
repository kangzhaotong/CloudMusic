import initState from "../state/AlbumList";
import {GETALBUMLUN} from "../actionType/AlbumList";
import {GETALBUM} from "../actionType/AlbumList";

let reducer=(state=initState,action)=>{
    let newState= JSON.parse(JSON.stringify(state));
    if(action.type=== GETALBUMLUN){
        newState.albumLun=action.albumLun
    }
    if(action.type=== GETALBUM){
        newState.AlbumPut=action.AlbumPut
    }
    
    return newState;
}

export default reducer;

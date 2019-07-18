import initState from "../state/index";
import {GETBANNER} from "../actionType/index";
import {GETDATA} from "../actionType/index";
import {GETSONG} from "../actionType/index";
import {GETTUIJIAN} from "../actionType/index";
import {GETRUN} from "../actionType/index";
import {GETHOT} from "../actionType/index";
// import {USER_PLAYLIST} from "../actionType/index";
// import {COLLECT} from "../actionType/index";
// import {COLLECT_ALBUM} from "../actionType/index";
// import {COLLECT_SINGER} from "../actionType/index";
let reducer=(state=initState,action)=>{
    let newState= JSON.parse(JSON.stringify(state));
    if(action.type=== GETBANNER){
        console.log(action.firstbannerlist);
        newState.firstbannerlist=action.firstbannerlist
    }
    if(action.type===GETDATA){
        newState.SellPoints=action.SellPoints;
        console.log( newState.SellPoints)
    }
    if(action.type===GETSONG){
        newState.newSongs=action.newSongs;
    }
    if(action.type===GETTUIJIAN){
        newState.tuijian=action.tuijian
    }
    if(action.type===GETRUN){
        newState.run=action.run;
    }
    if(action.type===GETHOT){
        newState.list=action.list;
    }
    return newState;
}

export default reducer;
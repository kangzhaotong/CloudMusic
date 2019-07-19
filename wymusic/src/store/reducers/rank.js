import initState from "../state/rank";
import {GETGF} from "../actionType/rank";
import {GETTJ} from "../actionType/rank";
import {GETQQ} from "../actionType/rank";
import {GETMORE} from "../actionType/rank";

let reducer=(state=initState,action)=>{
    let newState= JSON.parse(JSON.stringify(state));
    if(action.type===GETGF){
        newState.gf=action.gf;
    }
    if(action.type===GETTJ){
        newState.tj=action.tj;
    }
    if(action.type===GETQQ){
        newState.qq=action.qq;
    }
    if(action.type===GETMORE){
        newState.more=action.more;
    }
    return newState;
}

export default reducer;
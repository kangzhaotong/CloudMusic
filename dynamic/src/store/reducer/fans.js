import  {FANS} from '../actionType';
import {fans_data} from '../state';
export default function(state=fans_data,action){
    state = JSON.parse(JSON.stringify(state));
    if(action.type===FANS){
          state=action.payload.fans_data;
    }
    return state;
}
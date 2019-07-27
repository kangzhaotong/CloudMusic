import  {DONGTAI} from '../actionType';
import {dongtai_data} from '../state';
export default function(state=dongtai_data,action){
    state = JSON.parse(JSON.stringify(state));
    if(action.type===DONGTAI){
          state=action.payload.dongtai_data;
    }
    return state;
}
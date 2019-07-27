import  {GETSONGS} from '../actionType';
import {songs_data} from '../state';
export default function(state=songs_data,action){
    state = JSON.parse(JSON.stringify(state));
    if(action.type===GETSONGS){
          state=action.payload.songs_data;
    }
    return state;
}
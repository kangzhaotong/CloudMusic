import {
    combineReducers
} from "redux";
import findVideoInit from '../../state/video/findVideo';
import {GET_FIND_VIDEO} from '../../actionType/video'

//修改find页面视频
function findVideo(state=findVideoInit,action){
    state = JSON.parse(JSON.stringify(state));
    if(action.type===GET_FIND_VIDEO){
        state.findVideoList = action.result;
    }
    return state;
}

export default combineReducers({
    findVideo
})



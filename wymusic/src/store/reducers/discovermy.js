import initState from "../state/statemy";
import {USER_PLAYLIST,COLLECT,COLLECT_ALBUM,COLLECT_SINGER,COLLECT_VIDEO,RECOMMEND_CONTENT,SINGER_RECOMMEND,RECOMMEND_RADIO,SUBSCRIBE,REAENT_SONGS} from "../actionType/actionTypemy";
let reducer=(state=initState,action)=>{
    let newState= JSON.parse(JSON.stringify(state));
    //获取的我的歌单
    if(action.type===USER_PLAYLIST){
        newState.user_playlist.details=action.playlist; 
        newState.user_playlist.id=action.id; 
        // console.log(newState.user_playlist.details)
    }
    //收藏
    if(action.type===COLLECT){
        newState.collet.details = action.collete
        newState.collet.id=action.id; 
        // console.log(newState.collet)
    }
    if(action.type===COLLECT_ALBUM){
        newState.album.collect_album=action.collect_album;
        newState.album.index = action.index
        // console.log(newState.album.index)
    }
    if(action.type===COLLECT_SINGER){
        newState.singer.collect_singer=action.collect_singer;
        newState.singer.index = action.index
    }
    //收藏视频
    if(action.type===COLLECT_VIDEO){
      
        newState.collect_video = action.collect_singer
        
    }
    //推荐歌单
    if(action.type===RECOMMEND_CONTENT){
        newState.recommend_content = action.recommend_content  
    }
    if(action.type===SINGER_RECOMMEND){
        newState.singer_recommend = action.singer_recommend  
    }
    //推荐电台
    if(action.type===RECOMMEND_RADIO){
        // console.log(action.recommend_radio)
        newState.recommend_radio = action.recommend_radio  
    }
    //订阅电台
    if(action.type===SUBSCRIBE){
        
        newState.subscribe = action.subscribe  
    }
    if(action.type===REAENT_SONGS){
      
        newState.recent_songs = action.recent_songs  
    }
    return newState;
}

export default reducer;
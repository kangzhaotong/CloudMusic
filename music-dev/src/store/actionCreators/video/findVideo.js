import {GET_FIND_VIDEO} from '../../actionType/video'
import {GET_FIND_VIDEO_URL} from '../../actionType/video'
import axios from "axios";
export default{
    changeFindVideo(result){
        return{
            type:GET_FIND_VIDEO,
            result
        }
    },
    getFindVideo(cb){
        return(dispatch)=>(
            axios.get('http://swmonk.top:3000/personalized/privatecontent')
                .then(({data})=>{
                    dispatch(this.changeFindVideo(data.result))
                    cb(data.result)
                })
        )
    },
    getFindVideoId(videoUrl){
        return{
            type:GET_FIND_VIDEO_URL,
            videoUrl
        }
    },
    playFindVideo(videoId){
        console.log(123,videoId);
        /*return(dispatch)=>(
            axios.get('http://swmonk.top:3000/video/url?id='+videoId)
                .then(({data})=>{
                    dispatch(this.getFindVideoId(data.urls.url))
                })
        )*/
    }
}
import axios from 'axios';
import { USER_PLAYLIST, COLLECT, COLLECT_ALBUM, COLLECT_SINGER, COLLECT_VIDEO } from '../actionType/actionTypemy';
export default {
    //用户歌单
    user_playlist(id) {
        return (dispatch) => {
            axios.get("/wymusic/user/playlist",{
                params:{uid:id}
            }).then(({ data }) => {
                console.log(data.playlist)
                var bbs = []
                data.playlist.map((v,i)=>{
                     if(v.userId===id/1){
                        bbs.push(v)
                     }
                 })
                // let my = data.playlist.filter(v=>v.userId ===id)
                // console.log(id,"1111111")
                dispatch({
                    playlist: bbs,
                    type: USER_PLAYLIST,
                    id: data.province
                })
            })
        }
    },
    //收藏
    collete(id) {
        return (dispatch) => {
            axios.get("/wymusic/user/playlist",{
                params:{uid:id}
            }).then(({ data }) => {
                var bbs = []
                data.playlist.map((v,i)=>{
                    console.log(id,v.userId)
                     if(v.userId===id/1){
                     }else{
                         bbs.push(v)
                     }
                 })
                dispatch({
                    collete:bbs,
                    type: COLLECT,
                    id: data.province
                })
            })
        }
    },

    //收藏专辑
    collect_album() {
        return (dispatch) => {
            axios.get("/wymusic/album/sublist").then(({ data }) => {
                // console.log(data, "我是收藏的专辑")
                dispatch({
                    type: COLLECT_ALBUM,
                    collect_album: data.data,
                    index: data.count
                })
            })
        }
    },
    //收藏歌手
    collect_singer() {
        return (dispatch) => {
            axios.get("/wymusic/artist/sublist").then(({ data }) => {
                // console.log(data, "我是收藏的专辑")
                dispatch({
                    type: COLLECT_SINGER,
                    collect_singer: data.data,
                    index: data.count
                })
            })
        }
    },
    //收藏视频
    collect_video() {
        return (dispatch) => {
            axios.get("/wymusic/related/allvideo?id=89ADDE33C0AAE8EC14B99F6750DB954D").then(({ data }) => {
                // console.log("www")
                // console.log(data.data, "视频")
                dispatch({
                    type: COLLECT_VIDEO,
                    collect_singer: data.data,
                })
            })
        }
    },
    //推荐专辑
    recommend_content(a) {
        return (dispatch) => {
            axios.get("/wymusic/album/newest").then(({ data }) => {
                // console.log("www")
                // console.log((data.albums).slice(1, 5), "推荐专辑")
                dispatch({
                    type: 'RECOMMEND_CONTENT',
                    recommend_content: (data.albums).slice(1, (4 * a)),
                })
            })
        }
    },
    //歌手推荐
    singer_recommend(i) {
        // console.log(i)
        return (dispatch) => {
            axios.get("/wymusic/top/artists",{
                params:{offset:0,limit:6}
            }).then(({ data }) => {
               
                // console.log(data,"推荐歌手")
                dispatch({
                    type: 'SINGER_RECOMMEND',
                    singer_recommend: data.artists,
                })
            })
        }
    },
    //推荐电台
    recommend_radio(){
        return (dispatch) => {
            axios.get("/wymusic/personalized/djprogram").then(({ data }) => {
                // console.log(data, "推荐电台")
                dispatch({
                    type: 'RECOMMEND_RADIO',
                    recommend_radio:data.result,
                })
            })
        }
    },
    //订阅电台
    subscribe(){
        return (dispatch) => {
            axios.get("/wymusic/dj/sublist").then(({ data }) => {
                // console.log(data, "订阅电台")
                dispatch({
                    type: 'SUBSCRIBE',
                    subscribe:data.djRadios,
                })
            })
        }
    },
    //最近播放音乐
    recent_songs(id){
        // console.log(id)
        return (dispatch) => {
            axios.get("/wymusic/user/record",{
                params:{uid:id,type:1}
            }
            ).then(({ data }) => {
                // console.log(data, "最近播放")
                dispatch({
                    type: 'REAENT_SONGS',
                    recent_songs:data.weekData,
                })
            })
        }
    }
    //取消收藏歌单
}
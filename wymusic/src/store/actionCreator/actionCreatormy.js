import axios from 'axios';
import baseUrl from '../../baseUrl';
import { USER_PLAYLIST, COLLECT, COLLECT_ALBUM, COLLECT_SINGER, COLLECT_VIDEO } from '../actionType/actionTypemy';
export default {
    //用户歌单
    user_playlist() {
        return (dispatch) => {
            axios.get("/wymusic/user/playlist?uid=32953014").then(({ data }) => {
                console.log(data.playlist)
                dispatch({
                    playlist: data.playlist,
                    type: 'USER_PLAYLIST',
                    id: data.province
                })
            })
        }
    },
    //收藏
    collete() {
        return (dispatch) => {
            axios.get(baseUrl + "/playlist/subscribers?id=544215255&limit=30").then(({ data }) => {
                console.log(data)
                dispatch({
                    collete: data.subscribers,
                    type: 'COLLECT',
                    id: data.province
                })
            })
        }
    },

    //收藏专辑
    collect_album() {
        return (dispatch) => {
            axios.get(baseUrl + "/album/sublist").then(({ data }) => {
                console.log(data, "我是收藏的专辑")
                dispatch({
                    type: 'COLLECT_ALBUM',
                    collect_album: data.data,
                    index: data.count
                })
            })
        }
    },
    //收藏歌手
    collect_singer() {
        return (dispatch) => {
            axios.get(baseUrl + "/artist/sublist").then(({ data }) => {
                console.log(data, "我是收藏的专辑")
                dispatch({
                    type: 'COLLECT_SINGER',
                    collect_singer: data.data,
                    index: data.count
                })
            })
        }
    },
    //收藏视频
    collect_video() {
        return (dispatch) => {
            axios.get(baseUrl + "/related/allvideo?id=89ADDE33C0AAE8EC14B99F6750DB954D").then(({ data }) => {
                console.log("www")
                console.log(data.data, "视频")
                dispatch({
                    type: 'COLLECT_VIDEO',
                    collect_singer: data.data,
                })
            })
        }
    },
    //推荐专辑
    recommend_content(a) {
        console.log(a)
        return (dispatch) => {
            axios.get(baseUrl + "/album/newest").then(({ data }) => {
                console.log("www")
                console.log((data.albums).slice(1, 5), "推荐专辑")
                dispatch({
                    type: 'RECOMMEND_CONTENT',
                    recommend_content: (data.albums).slice(1, (4 * a)),
                })
            })
        }
    },
    //歌手推荐
    singer_recommend(i) {
        console.log(i)
        return (dispatch) => {
            axios.get(baseUrl + "/top/artists",{
                params:{offset:0,limit:6}
            }).then(({ data }) => {
               
                console.log(data,"推荐歌手")
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
            axios.get(baseUrl + "/personalized/djprogram").then(({ data }) => {
                console.log(data, "推荐电台")
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
            axios.get(baseUrl + "/dj/sublist").then(({ data }) => {
                console.log(data, "订阅电台")
                dispatch({
                    type: 'SUBSCRIBE',
                    subscribe:data.djRadios,
                })
            })
        }
    }
}
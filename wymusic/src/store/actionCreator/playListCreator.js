import axios from 'axios';
import {PLAYlISTDETAIL, ALBUMLIST} from '../actionType/playList';

export default {
    playListDetail(id) {
        //歌单详情列表
        return (dispatch) => {
            axios.get("/wymusic/playlist/detail?id="+id).then(({data}) => {
                console.log(data,"我是获取的是详细信息")
                dispatch({
                    type: PLAYlISTDETAIL,
                    payload: {
                        playListDetail: data.playlist
                    }
                })
            })
        }
    },
    albumList(albumId) {
        //新歌详情列表
        return dispatch => {
            axios.get("/wymusic/album?id="+albumId).then(({data}) => {
                dispatch({
                    type: ALBUMLIST,
                    payload: {
                        data
                    }
                })
            })
        }
    }
}
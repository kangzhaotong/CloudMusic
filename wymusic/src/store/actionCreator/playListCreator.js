import axios from 'axios';
import {PLAYlISTDETAIL, NEWSONGLIST} from '../actionType/playList';

export default {
    playListDetail(id) {
        //歌单详情列表
        return (dispatch) => {
            axios.get("/wymusic/playlist/detail?id="+id).then(({data}) => {
                dispatch({
                    type: PLAYlISTDETAIL,
                    payload: {
                        playListDetail: data.playlist
                    }
                })
            })
        }
    },

    newSongList(songId) {
        //新歌详情列表
        return dispatch => {
            axios.get("/wymusic/album?id="+songId).then(({data}) => {
                dispatch({
                    type: NEWSONGLIST,
                    payload: {
                        data
                    }
                })
            })
        }
    }
}
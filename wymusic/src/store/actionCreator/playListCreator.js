import axios from 'axios';
import loading from './loading';
import {PLAYlISTDETAIL, ALBUMLIST} from '../actionType/playList';

export default {
    playListDetail(id) {
        //歌单详情列表
        return (dispatch) => {
            dispatch(loading.changeLoading(true));

            axios.get("/wymusic/playlist/detail?id="+id).then(({data}) => {
                dispatch({
                    type: PLAYlISTDETAIL,
                    payload: {
                        playListDetail: data.playlist
                    }
                });
                
                dispatch(loading.changeLoading(false));
            })
        }
    },
    albumList(albumId) {
        //专辑详情列表
        return dispatch => {
            dispatch(loading.changeLoading(true));

            axios.get("/wymusic/album?id="+albumId).then(({data}) => {
                dispatch({
                    type: ALBUMLIST,
                    payload: {
                        data
                    }
                });

                dispatch(loading.changeLoading(false));
            })
        }
    }
}
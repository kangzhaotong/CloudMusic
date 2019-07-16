import axios from 'axios';
import baseUrl from '../../baseUrl';
import {PLAYlISTDETAIL} from '../actionType/playList';

export default {
    playListDetail(id) {
        return (dispatch) => {
            axios.get(baseUrl+"/playlist/detail?id="+id).then(({data}) => {
                dispatch({
                    type: PLAYlISTDETAIL,
                    payload: {
                        playListDetail: data.playlist
                    }
                })
            })
        }
    }
}
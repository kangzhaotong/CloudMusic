import axios from 'axios';
import loading from './loading';
import {GETFRIENDS} from '../actionType/friend';

export default {
    getFriends(time=-1, pagesize=20) {
        return dispatch => {
            dispatch(loading.changeLoading(true));

            axios.get("/wymusic/login/cellphone?phone=17853513738&password=19970118").then(() => {
                axios({
                    url: "/wymusic/event?pagesize="+pagesize+"&lasttime="+time,
                    withCredentials: true
                }).then(({data}) => {
                    dispatch({
                        type: GETFRIENDS,
                        payload: {
                            event: data.event,
                            lasttime: data.lasttime
                        }
                    });
                    
                    dispatch(loading.changeLoading(false));
                })
            })
        }
    }

}
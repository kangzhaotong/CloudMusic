import axios from 'axios';
import {GETFRIENDS} from '../actionType/friend';

export default {
    getFriends(time=-1) {
        // console.log(222, time);
        return dispatch => {
            axios.get("/wymusic/login/cellphone?phone=17853513738&password=19970118").then(() => {
                axios({
                    url: "/wymusic/event?pagesize=16&lasttime="+time,
                    withCredentials: true
                }).then(({data}) => {
                    dispatch({
                        type: GETFRIENDS,
                        payload: {
                            events: data
                        }
                    })
                })
            })
        }
    }

}
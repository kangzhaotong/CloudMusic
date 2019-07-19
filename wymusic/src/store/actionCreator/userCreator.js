import axios from 'axios';
import {CHANGE_USERINFO_TOKEN} from "../actionType/userInfo"

export default {
    getUserInfo(phone, password) {
        return function (dispatch) {
            axios.get('/wymusic/login/cellphone', {
                params: {
                    phone,
                    password
                }
            }).then(({data}) => {
                if (data.code === 200) {
                    loginStatus().then((data) => {
                        localStorage.userInfo = JSON.stringify(data.profile);
                        localStorage.token = true;
                        dispatch({
                            type: CHANGE_USERINFO_TOKEN,
                            payload: {
                                userInfo: data.profile,
                                token: localStorage.token
                            }
                        });
                       
                    }).catch((msg)=>{console.log(msg)});
                }
            })
        }
    },
    logout() {
        return (dispatch) => {
            axios.get('/wymusic/logout/'+Date.now()).then(({data})=>{
                if(data.code === 200){
                        localStorage.clear();
                        dispatch({
                            type: CHANGE_USERINFO_TOKEN,
                            payload: {
                                uerInfo: localStorage.profile,
                                token: localStorage.token
                            }
                        })
                }
            })

        }
    }

}
function loginStatus(){
    return new Promise((res,rej)=>{
        axios.get('/wymusic/login/status').then(({data})=>{
            if(data.code === 200){
                res(data)
            }else{
                rej("网络错误")
            }
        })
    })

}


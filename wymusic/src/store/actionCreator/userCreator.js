import axios from 'axios';
import {CHANGE_USERINFO_TOKEN, CHANGEUSERINFO} from "../actionType/userInfo";

export default {
    getUserInfo(phone,password) {
        return  dispatch => {
            axios.post("/wymusic/login/cellphone",{
                phone,
                password
            }).then(({data}) => {
                if(data.code === 200) {
                    loginStatus().then((v) => {
                        localStorage.avatarUrl = data.profile.avatarUrl;
                        localStorage.nickname = data.profile.nickname;
                        localStorage.userToken = 1;
                        dispatch({
                            type: CHANGEUSERINFO,
                            payload: {
                                avatarUrl: localStorage.avatarUrl,
                                nickname: localStorage.nickname
                            }
                        })
                    })
                }
            }).catch(() => {
                alert("账号或密码错误！！");
            })
        }
    },

    logout(type) {
        return (dispatch) => {
            axios.get('/wymusic/logout/'+Date.now()).then(({data})=>{
                if(data.code === 200){
                    dispatch({
                        type: CHANGE_USERINFO_TOKEN,
                        payload: {}
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


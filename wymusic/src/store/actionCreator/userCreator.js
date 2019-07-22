import axios from 'axios';
import {CHANGE_USERINFO_TOKEN} from "../actionType/userInfo"
export default {
   
    logout() {
        console.log("11111")
        return (dispatch) => {
            axios.get('/wymusic/logout/'+Date.now()).then(({data})=>{
                console.log(data,"11111")
                if(data.code === 200){
                        localStorage.clear();
                        dispatch({
                            type: 'CHANGE_USERINFO_TOKEN',
                            payload: {
                                uerInfo: localStorage.propfile,
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


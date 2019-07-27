import axios from 'axios'
export default {
    getUserInfo(phone, password, rm) {
        return function (dispatch) {
            axios.get('/login/cellphone', {
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
                            type: 'CHANGE_USERINFO_TOKEN',
                            payload: {
                                userInfo: data.profile,
                                token: localStorage.token
                            }
                        });
                        rm.props.getSubCount();
                        rm.props.history.push('/account')
                    }).catch((msg)=>{console.log(msg)});
                }
            })
        }
    },
    logout() {
        return (dispatch) => {
            //服务器在响应头中告诉浏览器清除cookie，然后我需要更新状态中的cookie信息
            axios.get('/logout/'+Date.now()).then(({data})=>{
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
    },
    getMList(uid){
        return (dispatch)=>{
            axios.get('http://swmonk.top:3000/user/playlist?uid=' + uid).then(({data}) => {
                dispatch({
                    type:'CHANGE_MLIST',
                    payload:{
                        musicList:data.playlist
                    }
                })
            })
        }
    },
    getSubCount(){
        return (dispatch)=>{
            axios.get('http://swmonk.top:3000/user/subcount').then(({data}) => {
                localStorage.subcount = JSON.stringify(data);
                dispatch({
                    type:'CHANGE_SUB_COUNT',
                    payload:{
                        subcount:data
                    }
                })
            })
        }
    }


}
function loginStatus(){
    return new Promise((res,rej)=>{
        axios.get('/login/status').then(({data})=>{
            if(data.code === 200){
                res(data)
            }else{
                rej("网络错误")
            }
        })
    })

}


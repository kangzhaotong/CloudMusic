export default {
    userInfo:localStorage.userInfo?JSON.parse(localStorage.userInfo):{
        avatarUrl:'',
        userId:''
    },
    token: localStorage.token,
    musicList:[],
    subcount:localStorage.subcount?JSON.parse(localStorage.subcount):{}
}
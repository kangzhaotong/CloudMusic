export default {
  userInfo:localStorage.userInfo?JSON.parse(localStorage.userInfo):{
      avatarUrl:'',
      userId:''
  }
}
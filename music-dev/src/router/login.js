import Login from '../views/account/Login'
export default[
    {
        path:"/login",
        exact:true,
        component:Login,
        nameStr:"登录",
        isAuthorization:true
    }
]
import axios from 'axios';

export default{
    getGf(){
        return (dispatch)=>{
            axios.get("/wymusic/toplist/detail").then( res => {
                dispatch({
                    type:'GETGF',
                    gf:res.data.list
                })
            })
        }
    },
    getTj(){
        return (dispatch)=>{
            axios.get("/wymusic/toplist/detail").then( res => {
                dispatch({
                    type:'GETTJ',
                    tj:res.data.list
                })
            })
        }
    },
    getQq(){
        return (dispatch)=>{
            axios.get("/wymusic/toplist/detail").then( res => {
                dispatch({
                    type:'GETQQ',
                    qq:res.data.list
                })
            })
        }
    },
    getMore(){
        return (dispatch)=>{
            axios.get("/wymusic/toplist/detail").then( res => {
                dispatch({
                    type:'GETMORE',
                    more:res.data.list
                })

            })
        }
    }
}
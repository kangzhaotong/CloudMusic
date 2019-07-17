import axios from 'axios';

export default{
    getBanner(){
        return (dispatch)=>{
            axios.get("/wymusic/banner").then( res => {
                dispatch({
                    type:'GETBANNER',
                    firstbannerlist:res.data.banners,
                })
            });
        }
    },
    getData(){
        return (dispatch)=>{
            axios.get("/wymusic/personalized?&limit=9").then( res => {

                dispatch({
                    SellPoints: res.data.result,
                    type:'GETDATA'
                })
            })
        }
    },
    getSong(){
        return (dispatch)=>{
            axios.get("/wymusic/album/newest?&limit=6").then( res => {
                dispatch({
                    newSongs: res.data.albums,
                    type:'GETSONG'
                })
            })
        }
    },
    getTuijian(){
        return (dispatch)=>{
            axios.get("/wymusic/personalized/newsong").then( res => {
                dispatch({
                    tuijian: res.data.result,
                    type:'GETTUIJIAN'
                })

            })
        }
    },
    getRun(){
        return (dispatch)=>{
            axios.get("/wymusic/song/url?id=33894512").then( res => {
                dispatch({
                    run: res.data.data,
                    type:'GETRUN'
                })
            })
        }
    },
    getHot(){
        return (dispatch)=>{
            axios.get("/wymusic/search/hot/detail").then( res => {
                dispatch({
                    list: res.data.data,
                    type:'GETHOT'
                })
            })
        }
    },
    getResults(keywords){
    
        return (dispatch)=>{
            axios.get("/wymusic/search?keywords="+keywords).then( res => {
                // console.log(res.data);
                dispatch({
                    music:res.data.result.songs,
                    type:'RES'
                })
            })
        }
    }
}
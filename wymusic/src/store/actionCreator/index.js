import axios from 'axios';
import baseUrl from '../../baseUrl';

export default{
    getBanner(){
        return (dispatch)=>{
            axios.get(baseUrl+"/banner").then( res => {
                dispatch({
                    type:'GETBANNER',
                    firstbannerlist:res.data.banners,
                })
            });
        }
    },
    getData(){
        return (dispatch)=>{
            axios.get(baseUrl+"/personalized?&limit=9").then( res => {

                dispatch({
                    SellPoints: res.data.result,
                    type:'GETDATA'
                })
            })
        }
    },
    getSong(){
        return (dispatch)=>{
            axios.get(baseUrl+"/album/newest?&limit=6").then( res => {
                dispatch({
                    newSongs: res.data.albums,
                    type:'GETSONG'
                })
            })
        }
    },
    getTuijian(){
        return (dispatch)=>{
            axios.get(baseUrl+"/personalized/newsong").then( res => {
                dispatch({
                    tuijian: res.data.result,
                    type:'GETTUIJIAN'
                })

            })
        }
    },
    getRun(){
        return (dispatch)=>{
            axios.get(baseUrl+"/song/url?id=33894512").then( res => {
                dispatch({
                    run: res.data.data,
                    type:'GETRUN'
                })
            })
        }
    },
    getHot(){
        return (dispatch)=>{
            axios.get(baseUrl+"/search/hot/detail").then( res => {
                dispatch({
                    list: res.data.data,
                    type:'GETHOT'
                })
            })
        }
    },
    getSongList(){
        return (dispatch)=>{
             axios.get(baseUrl+"/playlist/catlist").then(res=>{
            dispatch({
                type:'GETSONGLIST',
                songList:res.data.sub

                })
            })
        }
     
    },
    getMv(){
        return (dispatch)=>{
             axios.get(baseUrl+"/top/playlist?limit=20").then(res=>{
            dispatch({
                type:'GETMV',
                mvList:res.data.playlists

                })
            })
        }
     
    },
    getResults(keywords){
    
        return (dispatch)=>{
            axios.get(baseUrl+"/search?keywords="+keywords).then( res => {
                console.log(res.data);
                dispatch({
                    music:res.data.result.songs,
                    type:'RES'
                })
            })
        }
    }
}
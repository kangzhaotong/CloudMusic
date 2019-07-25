import axios from 'axios';

export default{
    getAlbumlun(){
        return (dispatch)=>{
            axios.get("/wymusic/banner?type=2").then( res => {
                dispatch({
                    type:'GETALBUMLUN',
                    albumLun:res.data.banners,
                })
            });
        }
    },
    getAlbum(){ //获取新碟
        return (dispatch)=>{
            axios.get("/wymusic/top/album?offset=0&limit=30").then( res => {
                dispatch({
                    type:'GETALBUM',
                    AlbumPut:res.data.albums,
                })
            });
        }
    },
   
}
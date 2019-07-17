import axios from 'axios';
import baseUrl from '../../baseUrl';

export default{
    getAlbumlun(){
        return (dispatch)=>{
            axios.get(baseUrl+"/banner?type=2").then( res => {
                dispatch({
                    type:'GETALBUMLUN',
                    albumLun:res.data.banners,
                })
            });
        }
    },
    getAlbum(){
        return (dispatch)=>{
            axios.get(baseUrl+"/top/album?offset=0&limit=30").then( res => {
                dispatch({
                    type:'GETALBUM',
                    AlbumPut:res.data.albums,
                })
            });
        }
    },
   
}
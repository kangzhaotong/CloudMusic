import {GET_MUSIC_LIST} from '../../actionType/playlist';
import axios from 'axios';
export default {
    //接收参数cat,根据cat获取不同类型歌单,默认获取全部类型的歌单
    getMusicList(cat='全部'){
        return(dispatch)=>{
            axios.get('http://swmonk.top:3000/top/playlist?limit=16&order=hot&cat='+cat)
                .then(({data})=>{
                    dispatch(this.musicListAction(data.playlists))
                })
        }
    },
    musicListAction(playlists){
        return{
            type:GET_MUSIC_LIST,
            playlists
        }
    }
}
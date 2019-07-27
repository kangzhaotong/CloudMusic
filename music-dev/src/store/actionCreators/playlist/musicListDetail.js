import {GET_MUSIC_LIST_DETAIL} from '../../actionType/playlist'
import axios from 'axios';
export default{
    //接收参数:歌单的id，当不传入id时，默认id是5272970
    getMusicListDetail(id=5272970){
        return(dispatch)=>{
            axios.get('http://swmonk.top:3000/playlist/detail?id='+id)
                .then(({data})=>{
                    dispatch({
                        type:GET_MUSIC_LIST_DETAIL,
                        payload:{
                            playlist:data.playlist
                        }
                    })
                })
        }
    }
}
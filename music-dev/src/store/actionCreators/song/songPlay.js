import {GET_SONG_BY_ID} from '../../actionType/song';
import {GET_LYRIC_BY_ID} from '../../actionType/song'
import axios from 'axios';
export default {
    //获取歌曲
    getSongById(id){
        return((dispatch)=>{
            axios.get('/song/url?id='+id)
                .then(({data})=>{
                    dispatch(this.SongByIdAction(data))
                })
        })
    },
    SongByIdAction(data){
        return{
            type: GET_SONG_BY_ID,
            data
        }
    },
    //获取歌词
    getLyricById(songId) {
        return((dispatch)=>{
            axios.get('/lyric?id='+songId)
                .then(({data})=>{
                    dispatch(this.LyricByIsAction(data.lrc.lyric))
                })
        })
    },
    LyricByIsAction(data){
        return{
            type:GET_LYRIC_BY_ID,
            data
        }
    }
}
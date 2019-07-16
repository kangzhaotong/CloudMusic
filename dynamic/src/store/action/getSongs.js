import {GETSONGS} from '../actionType';
import axios from "axios";
export  default  {
       getSongs(songsID){
             return (dispatch)=>{
               axios.get('http://swmonk.top:3000/song/url?id='+songsID)
                .then(({ data }) => {
                dispatch({
                      type:GETSONGS,
                      payload:{
                            songs_data:data
                      }
                })
               })
             }
      }
}
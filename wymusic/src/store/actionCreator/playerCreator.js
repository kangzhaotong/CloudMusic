import axios from 'axios';
import baseUrl from '../../baseUrl';
import {GETSONGPLAY} from "../actionType/player"

export default {
    getSongPlay(id){
        return (dispatch)=>{
            dispatch((dispatch) => {
                axios.get(baseUrl+"/song/url?id="+id)
                    .then(({data})=>{
                        dispatch({
                            type:GETSONGPLAY,
                            payload:{
                                song:data.data
                            }
                        })
                    })
            })
        }
    }
}
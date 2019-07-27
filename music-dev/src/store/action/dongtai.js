import {DONGTAI} from '../actionType';
import axios from "axios";
export  default  {
       dongtai_a(){
             return (dispatch)=>{
               axios.get('http://swmonk.top:3000/event?pagesize=20')
                .then(({ data }) => {
                dispatch({
                      type:DONGTAI,
                      payload:{
                            dongtai_data:data.event
                      }
                })
               })
             }
      }
}
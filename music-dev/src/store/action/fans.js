import {FANS} from '../actionType';
import axios from "axios";
export  default  {
       fans(){
             return (dispatch)=>{
               axios.get('http://swmonk.top:3000/user/followeds?uid=1637882160')
                .then(({ data }) => {
                dispatch({
                      type:FANS,
                      payload:{
                            fans_data:data.followeds
                         }
                })
               })
             }
      }
}
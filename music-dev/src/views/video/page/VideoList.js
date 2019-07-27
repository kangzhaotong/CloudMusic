import React from "react";
import ComVideoCart from '../components/ComVideoCart'
import { Toast } from 'antd-mobile';

import axios from 'axios'

class VideoList extends React.Component {
    constructor(prop){
        super(prop);
        this.state={
            tabId:prop.tabId,
            datas:[]
        }
    }
    componentWillMount() {
        axios.get('/video/group?id='+this.state.tabId).then(({data})=>{
            if (data.code === 200) {
                this.setState({
                    datas:data.datas
                });
            }
        },({response})=>{
            if (response.data.code === 301) {
                Toast.info('请登录...',1)
            }else {
                console.log(response)
            }
        })
    }

    render() {
        return (
            <div>
                {this.state.datas.slice(0,4).map((v,i)=>{
                    return (
                        <ComVideoCart key={i} videoData={v.data}/>
                    )
                })}
            </div>
        )
    }
}

export default VideoList
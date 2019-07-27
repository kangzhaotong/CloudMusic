import React from "react";
import { Flex,Toast } from 'antd-mobile';
import ComDynamicsCart from "../components/ComDynamicsCart";
import axios from "axios";

const pubList=[
    {icon:'iconfont icon-edit',text:'发动态'},
    {icon:'iconfont icon-video1',text:'发布视频'}
];

class Dynamics extends React.Component {
    constructor(props) {
        super(props);
        this.state={
          event:[]
        };
    }

    componentWillMount() {
        axios.get('/event?pagesize=3&lasttime'+Date.now()).then(({data}) => {
            data.event.forEach(v => {
                v.json=JSON.parse(v.json);
            });
            this.setState(data)
        }).catch(()=>{
            Toast.info('没有登录，无权获取动态')
        });
    }

    render() {
        return (
            <div>
                <Flex style={{padding:'10px',background:'white'}}>
                    {pubList.map((v,i)=>{
                        return (
                            <Flex.Item key={i}>
                                <div style={{textAlign: 'center',height: '30px',lineHeight: '30px',width: '100%'}}>
                                    <i className={v.icon} style={{padding:'0 10px'}}/>{v.text}
                                </div>
                            </Flex.Item>
                        )
                    })}
                </Flex>
                {this.state.event.map((v,i)=>{
                    return(
                        <ComDynamicsCart data={v} key={i}/>
                        )
                })}
            </div>
        )
    }
}

export default Dynamics;


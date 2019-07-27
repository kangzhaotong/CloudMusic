import React from 'react';
//redux
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import userCreators from '../../store/actionCreators/userCreator'

import { Flex,Button,Checkbox} from 'antd-mobile';
import {log_reg} from '../../components/mine/log_reg'
const AgreeItem = Checkbox.AgreeItem;
const iconArr = [
    {iconName:'icon-github-fill'},
    {iconName:'icon-weibo'},
    {iconName:'icon-QQ'},
    {iconName:'icon-wechat-fill'},
];
class Login extends React.Component {
    constructor(){
        super();
        this.state ={

        }
    }
    render() {
        return (
            <div className={'winHeight'} style={{background:'rgb(225, 20, 20)',position:'absolute',top:'0'}}>
                <Flex direction={'column'} justify={'center'} >
                    <Flex.Item style={{color:'white',padding:"160px 0 200px"}}>
                        <p style={{width:'80px',height:'80px',background:'red',borderRadius:'50%',textAlign:'center',lineHeight:'80px'}}>
                            <i className={'iconfont icon-CN_NetEasemusic-copy'} style={{fontSize:'50px',}} />
                        </p>


                    </Flex.Item>
                    <Flex.Item style={{color:'white'}}>
                        <Button style={{borderRadius:'30px',width:'320px',color:'red'}} onClick={log_reg.bind(this,this.props.getUserInfo)}>手机号登陆</Button>
                    </Flex.Item>
                    <Flex.Item style={{flex:'4',marginTop:'30px'}}>
                        {
                            iconArr.map((v,i)=>{
                                return(
                                    <i key={i}className={'iconfont '+v.iconName} style={{fontSize:'25px',color:'white',border:'1px solid #ccc',borderRadius:'50%',margin:'20px 15px '}}  />

                                )
                            })
                        }
                    </Flex.Item>
                    <Flex.Item style={{flex:'4'}} className={'my_add '}>
                        <AgreeItem data-seed="logId" onChange={e => console.log('checkbox', e)}>
                            同意《用户协议》和《隐私政策》
                        </AgreeItem>
                    </Flex.Item>
                </Flex>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({...userCreators},dispatch)
}
export default connect(()=>{return{}},mapDispatchToProps)(Login);

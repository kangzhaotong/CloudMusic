import React from "react"
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
//ui
import {List, Grid, Switch, Button} from 'antd-mobile';
import styled from "styled-components";

//头
import {headerHandler} from "../../components/mine/Header"
import LowCom from '../../components/mine/Header'
import userCreators from "../../store/actionCreators/userCreator";

import {withRouter} from 'react-router-dom'
import TabBar from "../../components/common/TabBar";


const Item = List.Item;
const Brief = Item.Brief;
const My_Head = headerHandler({Ricon: 'icon-moreif', text: '', Licon: 'icon-cloud'})(LowCom);
const arr1 = [{
    icon: (<i className={'iconfont icon-icon-test5'} style={{fontSize: '30px', color: 'red'}}/>),
    text: '消息'
}, {
    icon: (<i className={'iconfont icon-icon-test5'} style={{fontSize: '30px', color: 'red'}}/>),
    text: '商城'
}, {
    icon: (<i className={'iconfont icon-icon-test5'} style={{fontSize: '30px', color: 'red'}}/>),
    text: '演出'
}, {
    icon: (<i className={'iconfont icon-icon-test5'} style={{fontSize: '30px', color: 'red'}}/>),
    text: '个性换肤'
}];

const data1 = arr1.map((v) => ({
    icon: v.icon,
    text: v.text
}));
const listArr = [
    {
        icon: 'icon-icon-test5',
        text: '口袋铃声',
        type: 0
    }, {
        icon: 'icon-wode',
        text: '我的订单',
        type: 0
    },
    {
        icon: 'icon-team',
        text: '附近的人',
        type: 0
    },
    {
        icon: 'icon-icon-test12',
        text: '夜间模式',
        type: 1
    },
    {
        icon: 'icon-saoma',
        text: '扫一扫',
        type: 0
    },

];

const LoginDiv = styled.div`
    width:100%;
    height:100px;
    background:#eee;
    text-align:center;
    overflow:hidden
`;
const LoginP = styled.p`
margin-top:10px;
    font-size:10px;
    color:#777
`;

class Account extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            arr0: [{
                icon: (<span style={{fontSize: '30px', color: 'red'}}>{this.props.subcount.newProgramCount}</span>),
                text: '动态'
            }, {
                icon: (<span style={{fontSize: '30px', color: 'red'}}>{this.props.subcount.artistCount}</span>),
                text: '关注'
            }, {
                icon: (
                    <span style={{fontSize: '30px', color: 'red'}}>{this.props.subcount.createdPlaylistCount}</span>),
                text: '粉丝'
            }, {
                icon: (<i className={'iconfont icon-edit1'}/>),
                text: '编辑资料'
            }]
        };
    }


    render() {
        return (
            <div>
                {
                    this.props.token ?
                        (<div>
                            <My_Head/>
                            <List>
                                <div style={{height:'80px',filter:'blur(30px)',position:'relative',top:'0px',background:'url('+this.props.userInfo.avatarUrl+')'}}/>
                                < Item
                                    style={{background:'rgba(0,0,0,0)',position:'absolute',top:'0',width:'100%',zIndex:'1'}}
                                    extra = {<i className={'iconfont icon-more2'} style={{fontSize: '12px',margin:'10px',paddingRight:'10px',color:'white',background:'red',display:'inline-block',width:'50px',height:'20px',borderRadius:'30px'}}>签到</i>}
                                    align="top"
                                    thumb={(
                                        this.props.token ?
                                            <img src={this.props.userInfo.avatarUrl} style={{
                                                borderRadius: '50%',
                                                position: 'realtive',
                                                width: '50px',
                                                height: '50px'
                                            }}/> :
                                            <i style={{
                                                display: 'inline-block',
                                                background: '#ccc',
                                                width: '50px',
                                                height: '50px'
                                            }}/>
                                    )}
                                    multipleLine>
                                    <Brief>lv{''}</Brief>
                                </Item>
                            </List>
                            </div>)
                        :(

                    <LoginDiv>
                    <LoginP>登录网易云音乐</LoginP>
                    <LoginP>手机电脑多段同步，尽享海量高品质音乐</LoginP>
                    <Button style={{
                    width: '120px',
                    borderRadius: '40px',
                    color: '#777',
                    height: '30px',
                    fontSize: '12px',
                    lineHeight: '30px',
                    margin: '0 auto',
                    background: 'rgba(0,0,0,0)',
                    border: '1px solid #888'
                }} onClick={() => {
                    this.props.history.push('/login')
                }}>立即登录</Button>
                    </LoginDiv>)

                }


                <Grid data={this.state.arr0} activeStyle={false}/>
                <div style={{textAlign: 'center',height:'30px',lineHeight:'30px'}}>
                    <img src="" alt="" style={{borderRadius: '20%', width: '80%', height: '40px'}}/>
                    广告图片
                </div>
                <Grid data={data1} activeStyle={false}/>
                <List style={{marginTop: '5px'}}>
                    <Item
                        thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                        arrow="horizontal"
                        onClick={() => {
                        }}
                    >口袋铃声</Item>
                    <Item
                        thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
                        onClick={() => {
                        }}
                        arrow="horizontal"
                    >
                        我的订单
                    </Item>
                </List>
                <List style={{marginTop: '5px'}}>
                    {
                        listArr.map((v, i) => {
                            return (
                                <Item
                                    key={i}
                                    thumb={(<i className={"iconfont " + v.icon}/>)}
                                    arrow={v.type === 0 ? "horizontal" : ''}
                                    onClick={() => {
                                    }}
                                    extra={v.type ? (<Switch
                                        checked={this.state.checked}
                                        onChange={() => {
                                            this.setState({
                                                checked: !this.state.checked,
                                            });
                                        }}
                                    />) : ''}
                                >{v.text}</Item>
                            )

                        })
                    }

                </List>
                {/*退出登陆*/}
                {

                    this.props.token?
                        <div>
                            <Button type="warning" onClick={this.props.logout}
                            >退出登陆</Button>
                        </div>
                         :''
                }
                <TabBar/>
                <div style={{height:'40px'}}/>
            </div>
        )
    }

}

function mapStateToProps({user}) {
    return {
        userInfo: user.userInfo,
        token: user.token,
        subcount:user.subcount
    }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({...userCreators}, dispatch)
}

export default withRouter( connect(mapStateToProps, mapDispatchToProps)(Account));
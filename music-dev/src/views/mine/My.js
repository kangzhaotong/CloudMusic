import axios from 'axios';
import React from 'react';
//redux
import {
    connect,
} from 'react-redux'
import {    bindActionCreators
} from 'redux'
//ui
import {List,Grid} from 'antd-mobile';
//歌单组件
import MusicList from '../../components/mine/MusicList'
//头部组件
import {headerHandler} from "../../components/mine/Header"
import HeadLowCom from '../../components/mine/Header'
//样式
import styled from 'styled-components'
import userCreators from "../../store/actionCreators/userCreator";
import TabBar from "../../components/common/TabBar";
//组件使用

import {withRouter,BrowserRouter as Router,Route,NavLink} from 'react-router-dom'
import MLDetail  from '../../components/mine/MLDetail'
const Head = headerHandler({Ricon:'icon-icon-test2',text:'我的音乐',Licon:'icon-menu'})(HeadLowCom);
const My_carI = styled.i`
display:inline-block;
width:40px;
height:40px;
background:red;
border-radius:50%;
font-size:22px;
color:white;
line-height:40px;
text-align:center
`;
const my_carouselArr = [
    {
        icon:<My_carI className={'iconfont icon-Piano'}/>,
        text:'小冰电台'
    },{
        icon: <My_carI className={'iconfont icon-addteam'}/>,
        text:'音乐交友'
    },{
        icon:<My_carI className={'iconfont icon-xianxing_diantai'}/>,
        text:'私人FM'
    },{
        icon:<My_carI className={'iconfont icon-Piano'}/>,
        text:'古典专区'
    },{
        icon:<My_carI className={'iconfont icon-run'}/>,
        text:'跑步FM'
    },{
        icon:<My_carI className={'iconfont icon-Piano'}/>,
        text:'驾驶模式'
    },{
        icon:<My_carI className={'iconfont icon-xihuan'}/>,
        text:'私藏推荐'
    },
];
const Item = List.Item;



class My extends React.Component {
    constructor(){
        super();
        this.state={
           listArr:[]
        }
    }
    render() {
        return (
            <div>
                <Head/>
                <Grid data={my_carouselArr}
                      isCarousel
                      carouselMaxRow={1}
                      dotActiveStyle={{background:'red'}}
                      hasLine={false}
                      onClick={_el => console.log(_el)} />

                <List>
                    {
                        this.state.listArr.map((v,index)=>{
                            return(
                                <Item
                                    key={index}
                                    thumb={
                                        <i className={'iconfont '+ v.icon}/>
                                    }
                                    onClick={() => {
                                        this.props.history.push(v.toPath)
                                    }}
                                >
                                    <span>{v.text}</span>
                                    <span style={{color:'#666',fontSize:'12px',paddingLeft:'10px'}}>({v.num})</span>
                                </Item>
                            )
                        })
                    }

                </List>
                <MusicList uid={this.props.userInfo.userId}/>
                <TabBar/>
            </div>
        )
    }
    componentWillMount(){
        console.log('my-------->',this.props)
        axios.get('/user/subcount').then(({data})=>{
            const  listArr = [
                {
                    icon:'icon-music',
                    text:'本地音乐',
                    toPath:'/localMusic',
                    num:data.artistCount
                },{
                icon:'icon-icon-test',
                text:'最近播放',
                toPath:'/recentPlay',
                num:data.newProgramCount
            },{
                icon:'icon-download',
                text:'下载管理',
                toPath:'/downLoadManger',
                num:data.createdPlaylistCount
            },{
                icon:'icon-DJ',
                text:'我的电台',
                toPath:'/myDj',
                num:data.djRadioCount
            },{
                icon:'icon-icon-test6',
                text:'我的收藏',
                toPath:'/myCollections',
                num:data.subPlaylistCount
            },
                ];
            this.setState({
                listArr
            });
            this.props.getMList(this.props.userInfo.userId)
        })
    }
}

function mapStateToProps(state, props) {
    return {
        userInfo:state.user.userInfo,
        token:state.user.token
    }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({...userCreators},dispatch)
}

export default withRouter( connect(mapStateToProps, mapDispatchToProps)(My));


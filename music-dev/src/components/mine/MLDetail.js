import React from 'react';
import {withRouter} from 'react-router-dom'
import {Grid, List} from 'antd-mobile';
import axios from 'axios';

import {headerHandler} from "../../components/mine/Header"
import HeadLowCom from '../../components/mine/Header'

const Item = List.Item;
const Brief = Item.Brief;
const Head = headerHandler({Ricon: 'icon-2601caidan2',R_icon:'icon-icon-test2', text: '歌单', Licon: 'icon-back'})(HeadLowCom);

class MLDetail extends React.Component {
    constructor() {
        super();
        this.state = {
            arr0: [{
                icon: (<i style={{fontSize: '20px', color: 'white'}} className={'iconfont icon-icon-comment'}/>),
                text: '评论'
            }, {
                icon: (<i style={{fontSize: '20px', color: 'white'}} className={'iconfont icon-share'}/>),
                text: '分享'
            }, {
                icon: (
                    <i style={{fontSize: '20px', color: 'white'}} className={'iconfont icon-download'}/>),
                text: '下载'
            }, {
                icon: (<i className={'iconfont icon-edit1'} style={{fontSize: '20px', color: 'white'}}/>),
                text: '多选'
            }],

            musicDetail: {

                playlist: {
                    coverImgUrl: '',
                    creator: {
                        avatarUrl: '',
                        nickname: ''
                    },
                    name: '',
                },
                privileges: [{id: ''}]
            },
            tracks: []
        }
    }

    render() {
        return (

            <div>
                <Head/>
                <List>
                    <div style={{
                        height: '100px',
                        filter: 'blur(40px)',
                        position: 'relative',
                        top: '0px',
                        background: 'url(' + this.state.musicDetail.playlist.coverImgUrl + ')',
                        backgroundSize: "100%"
                    }}/>
                    < Item
                        style={{
                            background: 'rgba(0,0,0,0)',
                            position: 'absolute',
                            top: '0',
                            width: '100%',
                            zIndex: '1',
                            height: '100px'
                        }}
                        extra={''}
                        align="top"
                        thumb={(
                            <img src={this.state.musicDetail.playlist.coverImgUrl} style={{
                                width: '100px',
                                height: '100px'
                            }}/>
                        )}
                        multipleLine>
                        <Brief>
                            <b style={{color: '#fff', fontSize: '20px'}}>{this.state.musicDetail.playlist.name}</b>
                        </Brief>
                        <Brief style={{marginTop: '12px'}}>
                            <img src={this.state.musicDetail.playlist.creator.avatarUrl} style={{
                                borderRadius: '50%',
                                width: '30px',
                                height: '30px',
                                marginRight: '20px'
                            }}/>
                            <span style={{
                                color: '#fff',
                                width: '100%',
                                display: 'inline-block'
                            }}>{this.state.musicDetail.playlist.creator.nickname} ></span>
                        </Brief>
                    </Item>
                </List>
                {/*小图标*/}
                <Grid data={this.state.arr0} activeStyle={false} hasLine={false}
                      itemStyle={{height: '60px', background: 'rgba(0,0,0,0.1)'}}/>
                <div>


                    {/*歌单中歌曲列表*/}
                    <List>
                        {
                            this.state.tracks.map((v, i) => {
                                return (
                                    <Item
                                        style={{height: '70px'}}
                                        key={i}
                                        extra={(
                                            <span>
                                                <i className={'iconfont icon-video'}/>
                                                <i className={'iconfont icon-2601caidan2'} style={{paddingLeft:'15px'}}/>
                                            </span>
                                        )}
                                        align="top"
                                        thumb={(

                                            <span style={{paddingRight: '10px'}}>{i + 1}</span>


                                        )}
                                        multipleLine>
                                        {this.state.tracks[i].al.name}
                                        <Brief>
                                            <span style={{display:'inline-block',width:'30px',height:'20px',lineHeight:'20px',textAlign:'center',color:'#f50',border:'1px solid #f50',transform:'scale(0.6)'}}>SQ</span>
                                            {this.state.tracks[i].ar[0].name}
                                        </Brief>
                                    </Item>
                                )
                            })
                        }
                    </List>
                </div>
            </div>
        )

    }

    componentWillMount() {
        axios.get('/playlist/detail?id=' + this.props.location.state.id).then(({data}) => {
            this.setState({
                musicDetail: data,
                tracks: data.playlist.tracks
            });

        })
    }
}

export default withRouter(MLDetail);
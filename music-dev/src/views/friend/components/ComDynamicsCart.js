import React from "react";
import {Card, WhiteSpace, List, Toast} from 'antd-mobile';
import ComVideo from "../../../components/ComVideo";
import axios from 'axios'

const Item = List.Item;
const Brief = Item.Brief;


class ComDynamicsCart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // data: {
            //     user: {
            //         nickname: '雾与晨的杂货店',
            //         avatarUrl: 'http://p1.music.126.net/5d0bC1ujUd0Ll2YxxAWeJw==/109951163549015945.jpg'
            //     },
            //     json: {
            //         msg: '#凄凄切切群群群群群群',
            //         song: {
            //             id: 446935665,
            //             name: '我是歌名',
            //             artists: [
            //                 {name: '刘德华'},
            //                 {name: '赵本山'}
            //             ],
            //             album: {
            //                 img80x80: 'https://p2.music.126.net/dezC5zAbgISxdrnjdGjMMg==/3264450024433088.jpg?param=80x80x1'
            //             }
            //         },
            //         video: {
            //             coverUrl: "http://p4.music.126.net/rn1l9Zx8cjlqt4C07Z3B9Q==/109951163955448242.jpg",
            //             durationms: 295082,
            //             size: 24199290,
            //             videoId: ""
            //         }
            //     },
            //     pics: [
            //         {squareUrl: 'https://p1.music.126.net/7y0IP1eClQ9FpX0CQ2Oi1w==/109951163864685740.jpg'},
            //         {squareUrl: 'https://p1.music.126.net/7y0IP1eClQ9FpX0CQ2Oi1w==/109951163864685740.jpg'}
            //     ]
            // },
            videoData: {}
        };
    }

    componentWillMount() {
        this.setState({
            data: this.props.data
        });
        if (this.props.data.json.video) {
            axios.get('/video/url?id=' + this.props.data.json.video.videoId).then(({data}) => {
                this.setState({
                    videoData: {
                        play_url: data.urls[0].url
                    }
                });

            }, ({response}) => {
                if (response.data.code === 301) {
                    Toast.info('登录才能查看视频部分...', 1)
                } else {
                    console.log(response)
                }
            })
        }
    }

    componentDidMount() {
    }


    static parseTime(ms) {
        let s = ms / 1000;
        return Math.floor(s / 60) + ':' + Math.ceil(s % 60)
    }

    render() {
        return (
            <div>
                <WhiteSpace size="xs"/>
                <Card full>
                    {/*动态发表者信息*/}
                    <Card.Header
                        style={{height: '50px', paddingTop: '30px'}}
                        title={this.state.data.user.nickname}
                        thumb={this.state.data.user.avatarUrl}
                        thumbStyle={{borderRadius: '50%', height: '30px'}}
                        extra={
                            <div>
                                <div style={{float: 'left'}}>分享单曲:</div>
                                <div style={{
                                    float: 'right',
                                    background: 'red',
                                    color: 'white',
                                    padding: '3px 6px',
                                    borderRadius: '12px'
                                }}><span className={'iconfont icon-add'}>关注</span></div>
                            </div>
                        }
                    />
                    {/*动态主体部分*/}
                    <Card.Body style={{padding: '0 10px', textAlign: "left"}}>
                        {/*文本动态*/}
                        <div style={{lineHeight: '20px', padding: '10px'}}>{this.state.data.json.msg}</div>
                        {/*图片动态*/}
                        <div>
                            {this.state.data.pics.map((v, i) => {
                                return (
                                    <img key={i} src={v.squareUrl} alt={''} style={{padding: '3px', width: '30%'}}/>
                                )
                            })}
                        </div>
                        {/*音乐动态*/}
                        {this.state.data.json.song ? (
                            <div>
                                <List style={{clear: "both"}}>
                                    <Item style={{
                                        height: '70px',
                                        background: 'rgba(19,64,101,0.06)',
                                        borderRadius: '10px'
                                    }}
                                          thumb={(<img style={{width: '50px', height: '50px', borderRadius: '5px'}}
                                                       src={this.state.data.json.song.album.img80x80} alt={'img'}/>)}
                                          onClick={() => {
                                          }}
                                          extra={(
                                              <div style={{
                                                  background: 'rgba(255,113,102,0.88)',
                                                  width: '40px',
                                                  height: '40px',
                                                  float: 'right',
                                                  borderRadius: '50%',
                                                  position: 'relative'
                                              }}>
                                                  <i className={'iconfont icon-play1'} style={{
                                                      fontSize: '30px',
                                                      color: 'rgba(255,255,255,0.76)',
                                                      position: 'absolute',
                                                      left: '8px',
                                                      top: '-2px'
                                                  }}/>
                                              </div>
                                          )}
                                    >{this.state.data.json.song.name}<Brief>{this.state.data.json.song.artists.map((v) => v.name).join('、')}</Brief></Item>
                                </List>
                            </div>
                        ) : null}

                        {/*视频动态*/}
                        {this.state.data.json.video ? (
                            <div>

                                <ComVideo
                                    videoSrc={this.state.videoData.play_url}
                                    coverImgUrl={this.state.data.json.video.coverUrl}
                                    lbEl={(<span className={'iconfont icon-play'}>190万</span>)}
                                    rtEl={(<div
                                        style={{padding: '4px', border: '1px solid', borderRadius: '10px'}}>电影</div>)}
                                    rbEl={(<span
                                        className={'iconfont icon-icranking'}>{ComDynamicsCart.parseTime(this.state.data.json.video.durationms)}</span>)}
                                    centerEl={(<div style={{position: "absolute", left: '-20px', top: '-20px'}}><i
                                        className={'iconfont icon-play1'} style={{fontSize: '40px'}}/></div>)}/>
                            </div>
                        ) : null}

                    </Card.Body>
                </Card>
                <WhiteSpace size="xs"/>
            </div>
        )
    }
}

export default ComDynamicsCart;
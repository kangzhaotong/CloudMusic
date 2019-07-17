import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';
import '../../assets/css/playList.css';
import playListCreator from '../../store/actionCreator/playListCreator';

class PlayListDetail extends Component {
    render() {
        return (
            <div>
                <div className="playListTopWrap">
                    <div className="coverWrap">
                        <img className="play-list-cover" src={this.props.playList.backgroundCoverUrl} alt="背景"/>
                    </div>

                    <div className="playListTop">
                        <div className="listTop">
                            <i className="iconfont icon-arrow-right"></i>
                            <span>歌单</span>
                            <div>
                                <i className="iconfont icon-shudian"></i>
                                <i className="iconfont icon-gedan"></i>
                            </div>
                        </div>

                        <div className="listMiddle">
                            <div>
                                <img className="listCover" src={this.props.playList.coverImgUrl} alt="cover"/>
                            </div>
                            <div className="listInfoWrap">
                                <div className="listName">{this.props.playList.name}</div>
                                <div className="listCreator">
                                    <img src={this.props.playList.creator.avatarUrl} alt="头像"/>
                                    <span>{this.props.playList.creator.nickname}</span>
                                    <i className="iconfont icon-arrow-right1"></i>
                                </div>
                                <div className="listDescription">{this.props.playList.description}</div>
                            </div>
                        </div>

                        <div className="listBottom">
                            <div>
                                <i className={"iconfont icon-duoxuan"}></i>
                                <span>{this.props.playList.commentCount}</span>
                            </div>
                            <div>
                                <i className={"iconfont icon-duoxuan"}></i>
                                <span>{this.props.playList.shareCount}</span>
                            </div>
                            <div>
                                <i className={"iconfont icon-duoxuan"}></i>
                                <span>下载</span>
                            </div>
                            <div>
                                <i className={"iconfont icon-duoxuan"}></i>
                                <span>多选</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="playListBottomWrap">
                    <div className="topMsg">
                        <div>
                            <i className="iconfont icon-yinyue"></i>
                            <span>含1首VIP专项歌曲</span>
                        </div>
                        <div>
                            <span>首开VIP仅5元</span>
                            <i className="iconfont icon-arrow-right1"></i>
                        </div>
                    </div>

                    <div className="playAll">
                        <div className="playAllOne">
                            <i className="iconfont icon-bofang"></i>
                            <span>播放全部</span>
                            <b>(共{this.props.playList.trackCount}首)</b>
                        </div>
                        <div className="playAllTwo">+ 收藏({this.props.playList.subscribedCount})</div>
                    </div>

                    {
                        this.props.playList.tracks.map((v, i) => {
                            return (
                                <div key={i} className="songItem" onClick={()=>{
                                    this.props.history.push("/player/"+v.id)
                                }}>
                                    <div className="songInfo">
                                        <span className="songNum">{i + 1}</span>
                                        <div className="songDetail">
                                            <span>{v.name}</span>
                                            <div className="songAr">
                                                <div className="songSQ">SQ</div>
                                                {
                                                    v.ar.map((v, i) => {
                                                        return (
                                                            <span key={i}>{v.name} </span>
                                                        )
                                                    })
                                                }
                                                <span>- {v.name}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <i className="iconfont icon-shudian"></i>
                                </div>
                            )
                        })
                    }

                    <div className="subscriberWrap">
                        {this.props.playList.subscribers.map((v, i) => {
                            return (
                                <div className="subscriber" key={i}>
                                    <img src={v.avatarUrl} alt="avatar"/>
                                </div>
                            )
                        })}
                    </div>
                    
                </div>
            </div>
        )
    }

    componentDidMount() {
        // console.log(this.props);
        if(this.props.match.params.id) {
            this.props.playListDetail(this.props.match.params.id);
        } else alert("获取歌单信息错误！！");
    }
}

function mapStateToProps({playList}) {
    console.log("22222222", playList.playListDetail);
    return {
        playList: playList.playListDetail
    }
}

export default connect(mapStateToProps, dispatch => bindActionCreators({
    ...playListCreator
}, dispatch))(withRouter(PlayListDetail));
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';
import '../assets/css/albumList.css';
import playListCreator from '../store/actionCreator/playListCreator';

class AlbumList extends Component {
    date(v){
        var time = new Date(v);
        var timeStr = time.getFullYear()+"-"+
            (time.getMonth()+1).toString().padStart(2,"0")+"-"+
            time.getDate().toString().padStart(2,"0");
        return timeStr;
    }

    render() {
        return (
            <div id="newSongListWrap">
                <div className="listTopWrap">
                    <div className="listTopbg">
                        <img src={this.props.albums.album.blurPicUrl} alt="背景"/>
                    </div>
                    
                    <div className="topContent">
                        <div className="albumName">
                            <i className="iconfont iconfanhui" onClick={() => {
                                this.props.history.go(-1);
                            }}></i>
                            <span>专辑</span>
                            <div>
                                <i className="iconfont iconshudian"></i>
                                <i className="iconfont iconyinlebofangxuanlvjiezou"></i>
                            </div>
                        </div>

                        <div className="listMiddle1">
                            <div className="middleLeft">
                                <img src={this.props.albums.album.blurPicUrl} alt="头像"/>
                            </div>
                            <div className="middleRight">
                                <span className="alName">{this.props.albums.album.name}</span>
                                <div className="singer">
                                    <span>歌手：</span>
                                    <b>{this.props.albums.album.artist.name}</b>
                                    <i className="iconfont iconarrow-right1"></i>
                                </div>
                                <span className="alPublishTime">发行时间：{this.date(this.props.albums.album.publishTime)}</span>
                                <div className="alDescription">
                                    <span>{this.props.albums.album.description}</span>
                                    <i className="iconfont iconarrow-right1"></i>
                                </div>
                            </div>
                        </div>

                        <div className="listBottom">
                            <div>
                                <i className={"iconfont iconxiaoxi1"}></i>
                                <span>{this.props.albums.album.info.commentCount}</span>
                            </div>
                            <div>
                                <i className={"iconfont iconfenxiangzhuanfafasongzhijiantouyuanxingshar"}></i>
                                <span>{this.props.albums.album.info.shareCount}</span>
                            </div>
                            <div>
                                <i className={"iconfont iconxiazai"}></i>
                                <span>下载</span>
                            </div>
                            <div>
                                <i className={"iconfont iconduoxuan1"}></i>
                                <span>多选</span>
                            </div>
                        </div>
                    </div>
                </div>
                    
                <div className="playListBottomWrap">
                    <div className="topMsg">
                        <div>
                            <i className="iconfont iconyinyue1"></i>
                            <span>含1首VIP专项歌曲</span>
                        </div>
                        <div>
                            <span>首开VIP仅5元</span>
                            <i className="iconfont iconarrow-right1"></i>
                        </div>
                    </div>
                    
                    <div className="playAll">
                        <div className="playAllOne">
                            <i className="iconfont iconshipin1"></i>
                            <span>播放全部</span>
                            <b>(共{this.props.albums.album.size}首)</b>
                        </div>
                        <div className="playAllTwo">
                            <span>+ 收藏({this.props.albums.album.info.shareCount})</span>
                        </div>
                    </div>
                    
                    {
                        this.props.albums.songs.map((v, i) => {
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
                                                <div className="songAuthor">
                                                {
                                                    v.ar.map((item, i) => {
                                                        return (
                                                            <div key={i}>
                                                                <span>{item.name}</span>
                                                                <span style={{display:i===v.ar.length-1?'none':'inline'}}>/</span>
                                                            </div>
                                                        )
                                                    })
                                                }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <i className="iconfont iconshudian"></i>
                                </div>
                            )
                        })
                    }

                </div>

            </div>
        )
    }

    componentDidMount() {
        // console.log(this.props);
        this.props.albumList(this.props.match.params.albumId);
    }
}

function mapStateToProps({playList}) {
    // console.log("22222222", playList.albumList);
    return {
        albums: playList.albumList
    }
}

export default connect(mapStateToProps, dispatch => bindActionCreators({
    ...playListCreator
}, dispatch))(withRouter(AlbumList));
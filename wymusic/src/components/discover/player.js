import React, {Component} from 'react';
import "../../assets/css/player.css"
import {connect} from 'react-redux'
import playCreator from '../../store/actionCreator/playerCreator'
import {
    bindActionCreators
} from "redux"

class Player extends Component {
    constructor() {
        super();
        this.state = {
            //是否播放
            isPlay: false,
            //切换歌词
            isLyric:false,
            // 当前播放时间
            touching:true,
            timeCurrent: "00:00",
            // audio currentTime
            currentTime: 0,
            // 播放总时间
            voiceDuration: "00:00",
        }
    }
    plays() {
        let self = this;
        let audio = this.refs.audioTag;
        audio.currentTime = this.state.currentTime;
        this.setState({
            isPlay: !this.state.isPlay
        })
        if (!this.state.isPlay) {
            audio.play();
            //如果没有加载出时间
            if (this.state.voiceDuration === "00:00") {
                window.setTimeout(() => {
                    self.loadVideo();
                }, 300);
            }
        } else {
            audio.pause();
        }
    }

    // audio的timeupdate事件，用于更新播放进度
    timeUpdate() {
        let audio = this.refs.audioTag;
        let timeline = this.refs.timeline;
        let playhead = this.refs.playhead;
        let timelineWidth = timeline.offsetWidth - playhead.offsetWidth;
        let geciHeight = this.refs.geci.offsetHeight;
        let geciPercent = geciHeight*(audio.currentTime / audio.duration)
        let playPercent = timelineWidth * (audio.currentTime / audio.duration);
        playhead.style.webkitTransform = "translateX(" + playPercent + "px)";
        playhead.style.transform = "translateX(" + playPercent + "px)";
        this.refs.geci.style.transform = "translateY(-" + geciPercent + "px)";
        let timeCurrent = this.transTime(audio.currentTime);
        this.setState({
            timeCurrent: timeCurrent,
            currentTime: audio.currentTime,
        });
    }
    /** 获取音频总长 */
    loadVideo() {
        let self = this;
        let audio = this.refs.audioTag;
        let duration = this.transTime(audio.duration);
        let time = duration === "NaN:NaN" ? "00:00" : duration;
        let initAudio = false;
        // alert(audio.duration);

        if (time === "00:00" && duration !== "NaN:NaN" && !!initAudio) {
            audio.play();
            audio.pause();
            window.setTimeout(() => {
                self.loadVideo();
            }, 300);
        }
        this.setState({
            voiceDuration: time,
        });
    }

    //转换音频时长显示
    transTime(time) {
        let duration = parseInt(time);
        let minute = parseInt(duration / 60);
        let sec = duration % 60 + '';
        let isM0 = ':';
        if (minute === 0) {
            minute = '00';
        } else if (minute < 10) {
            minute = '0' + minute;
        }
        if (sec.length === 1) {
            sec = '0' + sec;
        }
        return minute + isM0 + sec
    }

    /**
     * 进度条操作
     */
    timelineClick(e) {
        let timeline = this.refs.timeline;
        let playhead = this.refs.playhead;
        let audio = this.refs.audioTag;
        let timelineWidth = timeline.offsetWidth - playhead.offsetWidth;

        // 更新坐标位置
        // e.pageX 鼠标点击位置
        // offsetLeft  元素 相对于它的直接父元素 的 偏移量
        let newLeft = e.pageX - timeline.offsetLeft;
        let currentTime = audio.duration * (e.pageX - timeline.offsetLeft) / timelineWidth;

        if (newLeft >= 0 && newLeft <= timelineWidth) {
            playhead.style.transform = "translateX(" + newLeft + "px)";
        }
        if (newLeft < 0) {
            playhead.style.transform = "translateX(0)";
            currentTime = 0;
        }
        if (newLeft > timelineWidth) {
            playhead.style.transform = "translateX(" + timelineWidth + "px)";
            currentTime = audio.duration;
        }
        // 更新时间
        let timeCurrent = this.transTime(currentTime);
        this.setState({
            timeCurrent: timeCurrent,
            currentTime: currentTime,
        });

        // 如果在播放
        if (this.state.isPlay) {
            audio.currentTime = currentTime;
            audio.play();
        } else { // pause music
            audio.pause();
        }

    }

    // 进度条点击
    touchStart(e) {
        let events = e.touches[0] || e;
        this.timelineClick(events);
    }

    touchMove(e) {
        let events = e.touches[0] || e;
        this.timelineClick(events);
    }

    touchEnd(e) {
        this.setState({
            touching: false,
        })
    }

    handlerNext(){

    }
    handlerPreps(){

    }

    handoverLyric(){
        this.setState({
            isLyric: !this.state.isLyric
        })
    }

    componentDidMount() {
        this.props.getSongPlay(this.props.match.params.id);
        this.props.getSongDetail(this.props.match.params.id);
        this.props.getSongLyric(this.props.match.params.id);
    }

    render() {
        return (
            <div className="player">
                <i className="iconfont iconarrow-right" onClick={()=>{
                    this.props.history.go(-1)
                }}></i>
                <div className={"player-songDetail"}>
                    {
                        this.props.songDetail.map((item, index) => {
                            return (
                                <div key={index}>
                                    <div className={"play-songDetail-songname"}>
                                        <span>{item.name?item.name:"佚名"}</span>
                                    </div>
                                    <div className={"player-songDetail-name"}>
                                        {
                                            item.ar.map((v, i) => {
                                                if(!v.name){
                                                    return(
                                                        <span key={i}>{"佚名"}</span>
                                                    )
                                                }else {
                                                    if (item.ar.length === 1) {
                                                        return (
                                                            <span key={i}>{v.name}</span>
                                                        )
                                                    } else {
                                                        return (
                                                            <span key={i}>{v.name}></span>
                                                        )
                                                    }
                                                }
                                            })
                                        }
                                    </div>
                                    <div onClick={this.handoverLyric.bind(this)} className={"player-lrc-img"}>
                                        <div className={"player-songDetail-img"} style={{display:this.state.isLyric?"none":"block",animationPlayState:this.state.isPlay?"running":"paused"}}>
                                            <img src={item.al.picUrl===null?require("../../assets/images/zanwu.jpg"):item.al.picUrl} alt=""/>
                                        </div>
                                        <div className={"gengmafan"}></div>
                                       <div className={"mafan"}>
                                           <div className={"player-songDetail-lyric"} style={{display:this.state.isLyric?"block":"none"}}>
                                               <div  ref={"geci"}>
                                                   {
                                                       this.props.songLyric.map((v,i)=>{
                                                           return(
                                                               <p className={"player-songDetail-lyric-1"} ref="lrc" key={i}>{v.type}</p>
                                                           )
                                                       })
                                                   }
                                               </div>
                                               <div className={"zanwugeci"} style={{display:this.props.songLyric.length?"none":"block"}}>{"暂无歌词哦"}</div>
                                           </div>
                                       </div>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
                <div className="player-control">
                    {
                        this.props.song.map((item, index) => {
                            return (
                                <div className='content' key={index}>
                                    <div className="voice-container">
                                        <audio ref="audioTag" src={item.url} onTimeUpdate={() => this.timeUpdate()}
                                               onLoadedMetadata={() => this.loadVideo()} id={"a"}/>
                                        <div className="controls">
                                            <div className="fake-control">
                                                <div className="inline-block fake-control-timeline">
                                                    <div className="inline-block play-time">
                                                        <div
                                                            className="inline-block played-time">{this.state.timeCurrent}</div>
                                                        <div ref="timeline" className="timeline inline-block"
                                                             onClick={(e) => this.timelineClick(e)}>
                                                            <div ref="playhead" className="playhead"
                                                                 onTouchStart={(e) => this.touchStart(e)}
                                                                 onTouchMove={(e) => this.touchMove(e)}
                                                                 onTouchEnd={(e)=>this.touchEnd(e)}
                                                                 ></div>
                                                        </div>
                                                        <div className="inline-block audio-time"
                                                             id="audioTime">{this.state.voiceDuration}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="inline-block voice-control">
                                            <div onClick={this.handlerNext.bind(this)}>
                                                <i className={"iconfont iconshangyishou"}></i>
                                            </div>
                                            <div className="play-icon">
                                                <i className={this.state.isPlay?"iconfont iconzanting":"iconfont iconbofang1"} onClick={() => this.plays()}></i>
                                            </div>
                                            <div onClick={this.handlerPreps.bind(this)}>
                                                <i className={"iconfont iconnext-chapter"}></i>
                                            </div>
                                            </div>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        song: state.player.song,
        songDetail: state.player.songDetail,
        songLyric: state.player.songLyric,
    }
};
export default connect(mapStateToProps, dispatch => bindActionCreators({
    ...playCreator
}, dispatch))(Player);
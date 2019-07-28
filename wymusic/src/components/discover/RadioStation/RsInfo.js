import React,{Component} from "react";
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import {
    withRouter,
  } from "react-router-dom";
import radioCreator from "../../../store/actionCreator/radioStation";
import "../../../assets/css/RadioStation/rsClass.css"
class RsInfo extends Component{
    render(){
        return (
            <div className="class-box">
                <div className="sing-info">
                    {
                        this.props.playMp3.slice(0,1).map((v,i) => {
                            return (
                                <div key={i} >
                                    <div style={{
                                        backgroundImage:'url('+v.dj.avatarUrl+')',
                                    }} className="sing-banner">
                                        <div className="qqqq">
                                            <div>电台</div>
                                            <div>
                                                图标
                                            </div>
                                        </div>
                                        <div className="qqqq1">
                                            <div>
                                                <h3>{v.radio.name}</h3>
                                                <p>{v.radio.subCount}人已订阅</p>
                                            </div>
                                            <div className="subscription">订阅</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="class-abc" >
                    {
                        this.props.playMp3.map((v,i) => {
                            return (
                                <div key={i} className="class-aaaa" >
                                    <div key={v.mainSong.id} className="class-b">
                                        <div className="class-img1">{v.serialNum}</div>
                                        <div>
                                            <div className="class-c">{v.name}</div>
                                            <div className="class-img2">
                                                <div>{v.createTime}</div>
                                                <div>{v.listenerCount}</div>
                                                <div>{v.mainSong.bMusic.playTime}</div>
                                            </div>
                                           
                                        </div>
                                    </div>
                                    <div onClick={()=>{
                                    this.playMusicUrl(v.mainSong.id)
                                }}>播放
                                    <audio src={this.props.musicUrl} id="aud" autoPlay="autoplay"  preload="auto"></audio>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
    playMusicUrl(mainSongId){
        this.props.getMusicUrl(mainSongId);
    }
    componentDidMount(){
       
        this.props.getPlayList(this.props.match.params.id);
        
    }
}
function mapStateToProps(state){
    console.log(  state)
    return {
        playMp3:state.radioStation.playMp3,
        musicUrl:state.radioStation.musicUrl
    }
}
export default withRouter(connect(mapStateToProps,dispatch=>bindActionCreators(radioCreator,dispatch))(RsInfo));

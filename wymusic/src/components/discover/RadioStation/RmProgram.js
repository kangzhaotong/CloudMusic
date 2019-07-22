import React,{Component} from "react";
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import radioCreator from "../../../store/actionCreator/radioStation";
import "../../../assets/css/RadioStation/rsClass.css";
class RmProgram extends Component{
    constructor(){
        super();
        this.state = {
            isGo : true
        }
    }
    render(){
        return (
            <div className="class-box" >
                
                <div className="class-abc">
                    {
                        this.props.programList.map((v,i) => {
                            return (
                                <div key={i} className="class-aaaa" >
                                    <div className="class-b">
                                        <div className="class-img1"><img width="50px" src={v.coverUrl} alt=""></img></div>
                                        <div>
                                            <div className="class-c">{v.name}</div>
                                            <div className="class-img2">
                                                <img width="20px" src={v.dj.avatarUrl} alt=""/>
                                                <span>{v.dj.brand}</span>
                                                <span>|</span>
                                                <span>热度{v.listenerCount}</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div onClick={()=>{
                                        this.playMusicUrl(v.mainSong.id)
                                    }}>播放
                                        <audio src={this.props.musicUrl} id="aud" autoPlay="autoplay"  preload="auto"></audio>
                                    </div> */}
                                    <div className="go-music">播放</div>
                                    
                                </div>
                            )
                        })
                    }
                    <div className="wu-jiemu" style={{
                        display:this.props.programList.length === 0?"block":"none"
                    }}>抱歉该频道暂无热门节目</div>
                </div>
                
            </div>
        )
    }
    playMusicUrl(mainSongId){
        this.setState({
            isGo:!this.state.isGo
        })
        this.props.getMusicUrl(mainSongId);
    }
    playStop(){
        console.log(11111)
        var oAudio = document.getElementById('myaudio');
                    if (0) {
                        oAudio.play(); 
                    }
                    else {
                        oAudio.pause(); 
                    }
    }
    componentDidMount(){
        // console.log( this.props.location.state.id)  
    }
}
function mapStateToProps(state){
    return {
        musicUrl:state.radioStation.musicUrl
    }
}

export default connect(mapStateToProps,dispatch=>bindActionCreators(radioCreator,dispatch))(RmProgram);
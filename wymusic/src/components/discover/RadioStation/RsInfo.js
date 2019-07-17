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
                <div className="class-abc" >
                    {
                        this.props.playMp3.map((v,i) => {
                            return (
                                <div key={i} className="class-aaaa" onClick={()=>{
                                    this.playMp(v.mainSong.id)
                                }}>
                                    <div key={v.mainSong.id} className="class-b">
                                        <div className="class-img1"><img  src={v.blurCoverUrl} alt=""></img></div>
                                        <div>
                                            <div className="class-c">{v.name}</div>
                                            <div className="class-img2">
                                                <img width="20px" src={v.dj.avatarUrl} alt=""/>
                                                <span>{v.radio.desc}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>播放</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
    playMp(id){

    }
    componentDidMount(){
        console.log(  this.props.match.params)
        this.props.getPlayList(this.props.match.params.id)
        
    }
}
function mapStateToProps(state){
   
    return {
        playMp3:state.radioStation.playMp3
    }
}
export default withRouter(connect(mapStateToProps,dispatch=>bindActionCreators(radioCreator,dispatch))(RsInfo));

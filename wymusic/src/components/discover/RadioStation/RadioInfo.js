import React,{Component} from "react";
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import {
    withRouter,
  } from "react-router-dom";
import radioCreator from "../../../store/actionCreator/radioStation";
import "../../../assets/css/RadioStation/rsClass.css";
import RmProgram from "./RmProgram";
import RmRadio from "./RmRadio";
class RadioInfo extends Component{
    constructor(){
        super();
        this.state = {
            isColor:true,
            index:1
        }
    }
    render(){
        return (
            <div className="class-box">
                <div className="back">
                    <i className="iconfont icon-arrow-right" onClick={()=>{
                        this.props.history.go(-1)
                    }}></i><span>{this.props.location.state.name}</span>
                </div>  
                <div></div>
                <div className="class-nav">
                    <div ref="rmjm" className="class-nav1" onClick={()=>{
                        this.changeIndex(1)
                    }} style={{color:this.state.index===1?"red":"",borderBottom:this.state.index===1?"3px solid red":""}}>热门电台</div>
                    <div onClick={()=>{
                        this.changeIndex(2)
                    }} style={{color:this.state.index===2?"red":"",borderBottom:this.state.index===2?"3px solid red":""}}>热门节目</div>
                </div>
                <div style={{display:this.state.index===1?"block":"none"}}>
                    <RmRadio radioClassInfoList={this.props.radioClassInfoList}></RmRadio>
                </div>
                <div style={{display:this.state.index===2?"block":"none"}}>
                    <RmProgram programList={this.props.programList}></RmProgram>
                </div>
                
            </div>
        )
    }
    changeIndex(q){
        this.setState({
            index:q
        }) 
    }
    playMusicUrl(mainSongId){
        this.props.getMusicUrl(mainSongId);
        
    }
    componentDidMount(){
        // console.log( this.props.location.state.id,this.state.isColor)
        this.props.getRadioClassInfoList(this.props.location.state.id);
        this.props.getRadioProgramList(this.props.location.state.id);

    }
}
function mapStateToProps(state){
    // console.log(state)
    return {
        radioClassInfoList:state.radioStation.radioClassInfoList,
        programList:state.radioStation.programList
    }
}
export default withRouter(connect(mapStateToProps,dispatch=>bindActionCreators(radioCreator,dispatch))(RadioInfo));
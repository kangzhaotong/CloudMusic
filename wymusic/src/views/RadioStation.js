import React,{Component} from "react";
import "./../assets/css/RadioStation/rshome.css";
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import RadioChaildren from "../components/discover/RadioStation/RadioChildren";
import RsLunbotu from "../components/discover/RadioStation/RsLunbotu";
import {
    withRouter,
  } from "react-router-dom"
import radioCreator from '../store/actionCreator/radioStation'; 




class Radio extends Component{
    render(){
        return (
            <div>
                <div className="back">
                    <i className="iconfont icon-arrow-right" onClick={()=>{
                        this.props.history.go(-1)
                    }}></i><span>电台</span>
                </div>
                <div>
                    <RsLunbotu></RsLunbotu>
                </div>
                
                <div className="radio-nav">
                    <div onClick={()=>{
                        this.props.history.push("/radio/radioclassification")
                    }}>
                       <img src={require("../assets/images/4.jpg")} alt=""/>
                        <span>电台分类</span>
                    </div>
                    <div onClick={()=>{
                        this.props.history.push("/radio/radiorank")
                    }}>
                        <img src={require("../assets/images/4.jpg")} alt=""/>
                        <span>电台排行</span>
                    </div>
                    <div onClick={()=>{
                        this.props.history.push("/radio/concentrate")
                    }}>
                        <img src={require("../assets/images/4.jpg")} alt=""/>
                        <span>付费精品</span>
                    </div>
                    <div onClick={()=>{
                        this.props.history.push("/radio/musicclass")
                    }}>
                        <img src={require("../assets/images/4.jpg")} alt=""/>
                        <span>音乐课堂</span>
                    </div>
                    
                </div>
                <div className="radio-recommend-wrap">
                    <div className="change">
                        <h3>电台推荐</h3>
                        <span onClick={()=>{
                            this.props.getRadioRecommendList(this.props.i+3)
                        }}>换一换</span>
                    </div>
                    <div className="radio-recommend">
                        {
                            this.props.radioRecommendList.map(v => {
                                return (
                                    <div key={v.id} className="recommend-box" onClick={()=>{
                                        this.props.history.push("/radio/radiodetail/"+v.id)
                                    }}>
                                        <div className="radio-recommend-ps">
                                            <img  src={v.picUrl} alt=""></img>
                                            <p>{v.name}</p>
                                        </div>
                                        
                                        <div className="radio-recommend-nm">{v.rcmdtext}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    
                </div>
                <div className="concentrateList-box">
                    <div className="concentrateList-all">
                        <h3>精品推荐<span>你值得拥有的优质内容</span></h3>
                        <p>全部精品</p>
                    </div>
                    <div className="concentrateList">
                        {
                            this.props.concentrateList.map(v => {
                                return (
                                    <div key={v.id} className="qqq">
                                        <div className="concentrate-ps">
                                            <img src={v.picUrl} alt=""></img>
                                            <p>{v.name}</p>
                                            <span>付费精品</span>
                                        </div>
                                        <div className="concentrate-price">
                                            <p>{v.rcmdText}</p>
                                            <p>￥{v.originalPrice/100}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    
                </div>
                <RadioChaildren></RadioChaildren>
            </div>
        )
    }
    componentDidMount(){ 
        this.props.getConcentrateList();
        this.props.getRadioRecommendList(this.props.i);
        console.log(this.props);
    }
}
function mapStateToProps(state){
    return{
        radioRecommendList:state.radioStation.radioRecommendList,
        concentrateList:state.radioStation.concentrateList,
        i:state.radioStation.i
    }
}
export default connect(mapStateToProps,dispatch=>bindActionCreators(radioCreator,dispatch))(withRouter(Radio));
 

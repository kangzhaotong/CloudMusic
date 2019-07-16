import React,{Component} from "react";
import "./../assets/css/RadioStation/rshome.css";
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import RadioChaildren from "../components/discover/RadioStation/RadioChildren"
import axios from "axios";
import {
    BrowserRouter as Router,
    // HashRouter as Router,（路由前有#）
    Route,
    withRouter,
  } from "react-router-dom"





class Radio extends Component{
    render(){
        return (
            <div>
                <div>
                    <i className="iconfont">&#xe613;</i><h3>电台</h3>
                </div>
                <div>
                    轮播图
                    
                </div>
                <div className="radio-nav">
                    <div onClick={()=>{
                        this.props.history.push("radio/radioclassification")
                    }}>
                        <i>图标</i>
                        <p>电台分类</p>
                    </div>
                    <div onClick={()=>{
                        this.props.history.push("radio/radiorank")
                    }}>
                        <i>图标</i>
                        <p>电台排行</p>
                    </div>
                    <div onClick={()=>{
                        this.props.history.push("radio/concentrate")
                    }}>
                        <i>图标</i>
                        <p>付费精选</p>
                    </div>
                    <div onClick={()=>{
                        this.props.history.push("radio/musicclass")
                    }}>
                        <i>图标</i>
                        <p>音乐课堂</p>
                    </div>
                    
                </div>
                <div>
                    <div  >点击</div>
                    
                </div>
                <div>
                    <h3>电台推荐</h3>
                    <div className="radio-recommend">
                        {
                            this.props.radioRecommendList.map(v => {
                                return (
                                    <div key={v.id} >
                                        <p>
                                            <img width={"100px"} src={v.picUrl} alt=""></img>
                                            <span>{v.program.dj.nickname}</span>
                                        </p>
                                        
                                        <p>{v.name}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    
                </div>
                <div>
                    <div>
                        <h3>精品推荐<span>你值得拥有的优质内容</span></h3>
                        <p>全部精品</p>
                    </div>
                    <div className="concentrateList">
                        {
                            this.props.concentrateList.map(v => {
                                return (
                                    <div key={v.id} >
                                        <p>
                                            <img width={"100px"} src={v.picUrl} alt=""></img>
                                            <span>{v.name}</span>
                                        </p>
                                        <p>{v.rcmdText}</p>
                                        <p>￥{v.originalPrice/100}</p>
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
        this.props.getRadioRecommendList();
        console.log(this.props);
    }
}
function mapStateToProps(state){
    return{
        radioRecommendList:state.radioStation.radioRecommendList,
        concentrateList:state.radioStation.concentrateList
    }
}
function mapDispatchToProps(dispatch){
    return{
        getRadioRecommendList(){
            axios.get("http://www.qmsdalao.com:3000/personalized/djprogram")
                .then(({data})=>{
                    const radioRecommendList = data.result.splice(0,3);
                
                    
                    dispatch({
                        type: "UP_RADIORECOMEENDIST",
                        payload: {
                            radioRecommendList,
                            
                        }
                    })
                })
        },
        getConcentrateList(){
            axios.get("http://www.qmsdalao.com:3000/dj/paygift?limit=3&offset=20")
                .then(({data})=>{
                    
                    const concentrateList = data.data.list;
                    console.log(111,concentrateList)
                    dispatch({
                        type: "UP_CONCENTRATELIST",
                        payload: {
                            concentrateList,
                            
                        }
                    })
                })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Radio));
 

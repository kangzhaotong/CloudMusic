import React, { Component } from 'react';
import './slide.css'
import Collect from "./collect"
import {connect} from 'react-redux'
import Header from './header'

import actionCreate from '../../../store/actionCreator/actionCreatormy'
import { BrowserRouter as Router, Route, NavLink, Redirect, Switch } from 'react-router-dom';
class Slider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            myid:localStorage.userId
        }
        console.log(this.state.myid)
    }
    componentDidMount() {
        this.props.user_playlist(this.state.myid)
        this.props.collete(this.state.myid)
        console.log(this.state.myid,22222)
    }
    render() {
        return (
            <div>
                <Header></Header>
                <div className="slide-box">
                    <div className="slide-item">
                    <NavLink to="/bbs">
                        <div className="slide-item_a">
                            <span><img src={require('../../../assets/images/1.jpg')} alt="" /></span>
                            <p>最新MF</p>
                        </div>
                    </NavLink>
                    </div>
                    <div className="slide-item">
                        <div className="slide-item_a">
                            <span><img src={require('../../../assets/images/2.jpg')} alt="" /></span>
                            <p>最新电音</p>
                        </div>
                    </div>
                    <div className="slide-item">
                        <div className="slide-item_a">
                            <span><img src={require('../../../assets/images/3.jpg')} alt="" /></span>
                            <p>Sati空间</p>
                        </div>
                    </div>
                    <div className="slide-item">
                        <div className="slide-item_a">
                            <span><img src={require('../../../assets/images/4.jpg')} alt="" /></span>
                            <p>私藏推荐</p>
                        </div>
                    </div>
                    <div className="slide-item">
                        <div className="slide-item_a">
                            <span><img src={require('../../../assets/images/5.jpg')} alt="" /></span>
                            <p>因乐交友</p>
                        </div>
                    </div>
                    <div className="slide-item">
                        <div className="slide-item_a">
                            <span><img src={require('../../../assets/images/1.jpg')} alt="" /></span>
                            <p>亲子频道</p>
                        </div>
                    </div>
                    <div className="slide-item">
                        <div className="slide-item_a">
                            <span><img src={require('../../../assets/images/2.jpg')} alt="" /></span>
                            <p>古典专区</p>
                        </div>
                    </div>
                </div>
                <div className="slide_list">
                   <ul>
                       <li>
                           <i className="iconfont iconyinyue"></i> 
                           
                           <span>本地音乐(99+)</span>
                           
                       </li>
                       <li>
                       <NavLink to={`${this.props.match.url}/recentlyPlay`}>
                           <i className={"iconfont iconzuijinbofang"}></i> 
                           <span>最近播放(9)</span>
                        </NavLink>
                       </li>
                       <li>
                           <i className="iconfont iconxiazai"></i> 
                           <span>下载管理(0)</span>
                       </li>
                       <li>
                       <NavLink to={`${this.props.match.url}/broadcastingStation`}>
                           <i className="iconfont icondiantai"></i> 
                           <span>我的电台(66)</span>
                        </NavLink>
                       </li>
                       <li>
                            <NavLink to={`${this.props.match.url}/collection`}>
                                <i className="iconfont iconwodeshoucang"></i> 
                                <span>我的收藏(99+)</span>
                           </NavLink>
                       </li>
                   </ul>
                </div>
                <div>
                  <Collect {...this.props}></Collect>
                </div>
               
            </div>

        )
    }
}
let mapState=(state)=>state;
let mapAction=(dispatch)=>{
    return {
        user_playlist(id){
            dispatch(actionCreate.user_playlist(id))
        },
        collete(id){
            dispatch(actionCreate.collete(id))
        }
        
    }
};
export default connect(mapState,mapAction)(Slider);
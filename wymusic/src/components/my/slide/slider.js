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
        }
    }
    componentDidMount() {
        this.props.user_playlist()
        this.props.collete()
        console.log(this.props)
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
                           <span className="iconfont icon-musiccloud"></span> 
                           <i>本地音乐(99+)</i>
                           
                       </li>
                       <li>
                       <NavLink to={`${this.props.match.url}/recentlyPlay`}>
                           <span className="iconfont icon-yinyue"></span> 
                           <i>最近播放(9)</i>
                        </NavLink>
                       </li>
                       <li>
                           <span className="iconfont icon-pengyou"></span> 
                           <i>下载管理(0)</i>
                       </li>
                       <li>
                       <NavLink to={`${this.props.match.url}/broadcastingStation`}>
                           <span className="iconfont icon-shipin"></span> 
                           <i>我的电台(66)</i>
                        </NavLink>
                       </li>
                       <li>
                            <NavLink to={`${this.props.match.url}/collection`}>
                                <span className="iconfont icon-zhanghao"></span> 
                                <i>我的收藏(99+)</i>
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
        user_playlist(){
            dispatch(actionCreate.user_playlist())
        },
        collete(){
            dispatch(actionCreate.collete())
        }
        
    }
};
export default connect(mapState,mapAction)(Slider);
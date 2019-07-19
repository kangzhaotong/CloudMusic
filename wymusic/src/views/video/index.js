import React, { Component } from 'react';
import { connect } from "react-redux"
import { NavLink, BrowserRouter as Router, Route,Redirect} from "react-router-dom"
import { bindActionCreators } from "redux"
// import * as videoAction from "../../"
import * as videoAction from "../../store/actionCreator/video"
import "./index.css"
import "../../mock/mock"
// import axios from "axios"
// import Search from "../common/search/Search"
import Search from "../../components/common/search/Search" //搜索框

import Tuijian from '@/components/video/Tuijian' //推荐
import Zhibo from '@/components/video/Zhibo' //直播
import Breath from '@/components/video/Breath' //Breath
import Xianchang from '@/components/video/Xianchang' //现场
import Guangchang from '@/components/video/Guangchang' //广场
import Wudao from '@/components/video/Wudao' //舞蹈
import Mengchong from '@/components/video/Mengchong' //萌宠
import Mv from '@/components/video/mv/Mv' //Mv
import Fanchang from '@/components/video/Fanchang' //翻唱
import Life from '@/components/video/Life' //生活
import Music from '@/components/video/Music' //音乐
import Zuijia from '@/components/video/Zuijia' //最佳
const map = {
    Tuijian,
    Mv,
    Zhibo,
    Breath,
    Xianchang,
    Guangchang,
    Wudao,
    Mengchong,
    Fanchang,
    Life,
    Music,
    Zuijia
}  
function getComponent(file){
    return map[file] || null
}
class Video extends Component {
    constructor() {
        super();
        this.state = {
            index: 0
        }
    }
    fn(index) {
        this.setState({
            index
        })
    }
    render() {
        return (
            <div>
                <Search></Search>
                <div className="video-nav">
                    <nav>
                        {
                            this.props.navData.map((item, index) => {
                                return (
                                    <NavLink to={`${this.props.match.path}` + item.pathName} className={"list" + (this.state.index === index ? " active" : "")} key={index} onClick={this.fn.bind(this, index)} >{item.navtype}</NavLink>
                                )
                            })
                        }
                    </nav>
                </div >
                <div>
                    {/* { <Router> 子路由不加Router 默认子路由*/}
                       <Redirect to={`${this.props.match.path}` + "/tuijian"}></Redirect>
                        {  
                            this.props.navData.map((item, index) => {
                                return (
                                    <Route key={index} path={`${this.props.match.path}` + item.pathName} component={getComponent(item.component)}></Route>
                                )
                            })
                        }
                </div>
            </div>
        )
    }
    componentWillMount() {
        if (this.props.navData.length === 0) {
            this.props.getNavList()
        }
    }
}
function mapStateToProps(state) {
    return {
        navData: state.navData.navList
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(videoAction, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Video);

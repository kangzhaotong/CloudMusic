import React, { Component } from 'react'
import '../../../assets/css/home.css'
export default class header extends Component {
    render() {
        return (
            <div id="discover">
            <div id="header">
                    <i className="iconfont iconhuatong"></i>
                    <div className="search"onClick={this.seaHandler} >
                        <input type="text" placeholder="大家都在搜 隔壁老樊" />
                        <i className="iconfont iconfangdajing"></i>
                    </div>
                    <i className="iconfont  iconyinlebofangxuanlvjiezou"></i>
                </div>
                </div>
        )
    }
}

import React, { Component } from 'react'
import '../../../assets/css/home.css'
export default class header extends Component {
    render() {
        return (
            <div id="header">
                <i className="iconfont icon-huatong"></i>
                <div className="search"onClick={this.seaHandler} >
                    <input type="text"  />
                    <span>大家都在搜 隔壁老樊</span>
                    <i className="iconfont icon-fangdajing"></i>
                </div>
                <i className="iconfont icon-gedan"></i>
            </div>
        )
    }
}

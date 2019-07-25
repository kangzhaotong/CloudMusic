import React, { Component } from 'react'
import './Header.css'
export default class Header extends Component {
    returna(){
        // console.log(this.props)
        this.props.history.push("/my");
    }
    render() {
        return (
            <div className="header_collect">
                <span className=" iconfont iconfanhui header_collect_left" onClick={ this.returna.bind(this)}></span>
              
                <a>{this.props.teim}</a>
                <span className="iconfont  iconfangdajing header_collect_right"></span>
            </div>
        )
    }
}

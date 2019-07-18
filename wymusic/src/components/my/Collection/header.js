import React, { Component } from 'react'
import './Header.css'
export default class Header extends Component {
    constructor(props){
        super(props)
    }
    returna(){
        console.log(this.props)
        this.props.history.go(-1);
    }
    render() {
        return (
            <div className="header_collect">
                <span className="iconfont icon-arrow-right header_collect_left" onClick={ this.returna.bind(this)}></span>
                <a>{this.props.teim}</a>
                <span className="iconfont icon-fangdajing header_collect_right"></span>
            </div>
        )
    }
}

import React from 'react';
import {NavLink} from 'react-router-dom';

export default class TabBar extends React.Component{
    constructor(){
        super();
        this.state={
            type:0
        }
    }

    changeType = (match, location) => {
        // console.log(5555555,match,location);
        // if (!match) {
        //     return false
        // }
        // const eventID = parseInt(match.params.eventID)
        // return !isNaN(eventID) && eventID % 2 === 1
    }
    render(){
        return (
            <div className='tabBar'>
                <NavLink to={'/'} exact className='tabBar-link' activeStyle={{color:'#f00a0f'}}>
                    <span className='iconfont'>&#xe650;</span>
                    <p>发现</p>
                </NavLink>
                <NavLink to={'/video'} exact className='tabBar-link' activeStyle={{color:'#f00a0f'}}>
                    <span className='iconfont'>&#xe741;</span>
                    <p>视频</p>
                </NavLink>
                <NavLink to={'/mine'} exact className='tabBar-link' activeStyle={{color:'#f00a0f'}}>
                    <span className='iconfont'>&#xe61b;</span>
                    <p>我的</p>
                </NavLink>
                <NavLink to={'/friend'} exact className='tabBar-link' activeStyle={{color:'#f00a0f'}}>
                    <span className='iconfont'>&#xe685;</span>
                    <p>朋友</p>
                </NavLink>
                <NavLink to={'/account'} exact className='tabBar-link' activeStyle={{color:'#f00a0f'}}>
                    <span className='iconfont'>&#xe685;</span>
                    <p>帐号</p>
                </NavLink>
            </div>
        )
    }
}
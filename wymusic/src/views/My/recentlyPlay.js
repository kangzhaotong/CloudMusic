import React, { Component } from 'react'
import Header from '../../components/my/Collection/header'
import { BrowserRouter as Router, Route, NavLink, Redirect } from 'react-router-dom';
import Song from '../../components/my/recentlyPlay/Song'
import LiveStreaming from '../../components/my/recentlyPlay/LiveStreaming'
import Video from '../../components/my/recentlyPlay/Video'
import './recentlyPlay.css'
export default class recentlyPlay extends Component {
    render() {
        return (
            <div>
               <Header {...this.props} teim="最近播放"></Header>
                <div>
             
                        <div className={"recentlyPlay"}>
                            <NavLink activeClassName={"collection"} to={`${this.props.match.url}/song`}>歌曲</NavLink>
                            <NavLink activeClassName={"collection"} to={`${this.props.match.url}/liveStreaming`}>直播</NavLink>
                            <NavLink activeClassName={"collection"} to={`${this.props.match.url}/video`}>视频</NavLink>
                        </div>
                        {this.props.match.path===this.props.location.pathname?( <Redirect to={`${this.props.match.url}/song`}></Redirect>):''}  
                       
							<Route path="/my/recentlyPlay/song" component={Song}/>
                            <Route path="/my/recentlyPlay/liveStreaming" component={LiveStreaming}/>
                            <Route path="/my/recentlyPlay/video" component={Video}/>
						
                   
                </div>
            </div>
        )
    }
}

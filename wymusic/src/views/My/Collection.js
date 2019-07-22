import React, { Component } from 'react'
import Header from '../../components/my/Collection/header'
import { BrowserRouter as Router, Route, NavLink, Redirect, Switch } from 'react-router-dom';
import Album from '../../components/my/Collection/Album'
import Column from '../../components/my/Collection/Column'
import Singer from '../../components/my/Collection/Singer'
import Theme from '../../components/my/Collection/Theme'
import Video from '../../components/my/Collection/Video'
import "./collection.css"
function Discover(){
    return(
        <div>专辑</div>
    )
}
export default class Collection extends Component {
    constructor(props){
        super(props)
        console.log(this.props)
    }
    render() {
        return (
            <div>
            <Header {...this.props} teim="我的收藏"></Header>
                <div>
                    <Router>
                        <div className={"lint"}>
                            <NavLink activeClassName={"collection"} to={`${this.props.match.url}/album`}>专辑</NavLink>
                            <NavLink activeClassName={"collection"} to={`${this.props.match.url}/singer`}>歌手</NavLink>
                            <NavLink activeClassName={"collection"} to={`${this.props.match.url}/video`}>视频</NavLink>
                            <NavLink activeClassName={"collection"} to={`${this.props.match.url}/column`}>专栏</NavLink>
                            <NavLink activeClassName={"collection"} to={`${this.props.match.url}/theme`}>主题</NavLink>
                        </div>
                        
                        <Switch>
							<Route path="/my/collection/album" component={Album}/>
                            <Route path="/my/collection/singer" component={Singer}/>
                            <Route path="/my/collection/video" component={Video}/>
                            <Route path="/my/collection/column" component={Column}/>
                            <Route path="/my/collection/theme" component={Theme}/>
						</Switch>
                    </Router>
                </div>
            </div>
        )
    }
}

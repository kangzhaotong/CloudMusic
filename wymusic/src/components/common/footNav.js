import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Redirect, Switch } from 'react-router-dom';
import '../../assets/css/main.css';
import Account from '../account/account'
import My from '../my/my';
import Discover from "../discover/discover";
import Video from '../video/video';
import Friend from '../friends/friend';
class footNav extends React.Component{

  render(){
    return (
      <div>
          <Router>
              <div className="nav">
                <NavLink to="/discover" activeClassName="activeStyle">
                  <i className="iconfont icon-musiccloud"></i>
                  <span>发现</span>
                </NavLink>
                <NavLink to="/video" activeClassName="activeStyle">
                  <i className="iconfont icon-shipin" aria-hidden="true"></i>
                  <span>视频</span>
                </NavLink>
                <NavLink to="/my" activeClassName="activeStyle">
                  <i className="iconfont icon-yinyue" aria-hidden="true"></i>
                  <span>我的</span>
                </NavLink>
                <NavLink to="/friend" activeClassName="activeStyle">
                  <i className="iconfont icon-pengyou" aria-hidden="true"></i>
                  <span>朋友</span>
                </NavLink>
                <NavLink to="/account" activeClassName="activeStyle">
                  <i className="iconfont icon-zhanghao" aria-hidden="true"></i>
                  <span>账号</span>
                </NavLink>
              
                div className="view">
                          <Switch>
                            <Redirect from="/" to="/discover" exact/>
                            <Route path="/discover" component={Discover} />
                            <Route path="/video" component={Video} />
                            <Route path="/my" component={My} />
                            <Route path="/friend" component={Friend} />
                            <Route path="/account" component={Account} />
                          </Switch>
                        </div>
              </Router>
      </div>
      
    )
    
  }
  
      
}

export default footNav;
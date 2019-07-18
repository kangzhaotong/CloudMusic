import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Redirect, Switch } from 'react-router-dom';
import Account from './components/account/account'
import My from './views/My/index';
import Discover from "./components/discover/discover";
import Video from './components/video/video';
import Friend from './components/friends/friend';
import './assets/css/main.css';
import Everyday from "./components/discover/Everyday";
import Run from "./components/discover/run";
import Search from "./components/discover/search";
import Collection from "./views/My/Collection";//我的收藏
import BroadcastingStation from "./views/My/broadcastingStation";//我的电台
import RecentlyPlay from "./views/My/recentlyPlay";//最近播放
function Bbs() {
	return(
		<div>bbs</div>
	)
}
class App extends React.Component {
    render(){
        return (
			<Router>
				<div className="App">
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

					</div>
					<div className="view">
						<Switch>
							<Redirect from="/" to="/discover" exact/>
							<Route path="/discover" component={Discover} />
							<Route path="/video" component={Video} />
							<Route path="/my" exact  component={My} />
							<Route path="/friend" component={Friend} />
							<Route path="/account" component={Account} />
							<Route path="/everyday" component={Everyday} />
							<Route path="/run" component={Run} />
							<Route path="/search" component={Search} />
							<Route path="/my/collection"component={Collection} />
							<Route path="/my/broadcastingStation"component={BroadcastingStation} />
							<Route path="/my/recentlyPlay"component={RecentlyPlay} />
							
						</Switch>
					</div>
				</div>
			</Router>
        )
    }

}

export default App;

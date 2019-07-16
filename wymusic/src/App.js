import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Redirect, Switch } from 'react-router-dom';
import Account from './components/account/account'
import My from './components/my/my';
import Discover from "./components/discover/discover";
import Video from './components/video/video';
import Friend from './components/friends/friend';
import './assets/css/main.css';
import Everyday from "./components/discover/Everyday";
import Run from "./components/discover/run";
import Search from "./components/discover/search";
//获取歌单详情
import PlayListDetail from './components/common/PlayListDetail';
import router from "./router";
import Radio from "./views/RadioStation";
import RadioClassification from "./components/discover/RadioStation/RadioClassification";
import RadioRank from "./components/discover/RadioStation/RadioRank";
import MusicClass from "./components/discover/RadioStation/MusicClass";
import Concentrate from "./components/discover/RadioStation/Concentrate";




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
							<Route path="/my" component={My} />
							<Route path="/friend" component={Friend} />
							<Route path="/account" component={Account} />
							<Route path="/everyday" component={Everyday} />
							<Route path="/run" component={Run} />
							<Route path="/search" component={Search} />
							<Route path='/playListDetails/:id' component={PlayListDetail}/>
							<Route exact path="/radio" component={Radio}/>
							<Route path="/radio/radioclassification" component={RadioClassification}/>
							<Route path="/radio/radiorank" component={RadioRank}/>
							<Route path="/radio/musicclass" component={MusicClass}/>
							<Route path="/radio/concentrate" component={Concentrate}/>
						</Switch>
					</div>
				</div>
			</Router>
        )
    }
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Redirect, Switch } from 'react-router-dom';
import Account from './components/account/account'
import My from './views/My/index';
import Discover from "./components/discover/discover";
import Video from './components/video/video';
import Friend from './components/friends/friend';
import './assets/css/main.css';
import Everyday from "./components/discover/Everyday";
import Player from "./components/discover/player";
//歌单列表
import PlayListDetail from './views/PlayListDetail';
//新歌列表
import AlbumList from './views/AlbumList';

// import router from "./router";
// import Run from "./components/discover/run";
//import Search from "./components/discover/search";
import Collection from "./views/My/Collection";//我的收藏
import BroadcastingStation from "./views/My/broadcastingStation";//我的电台
import RecentlyPlay from "./views/My/recentlyPlay";//最近播放
import Search from "./components/discover/search/search";
import Result from "./components/discover/search/result";
import Album from "./components/common/Album";
import CD from "./components/common/CD";
import Radio from "./views/RadioStation";
import RadioClassification from "./components/discover/RadioStation/RadioClassification";
import RadioRank from "./components/discover/RadioStation/RadioRank";
import MusicClass from "./components/discover/RadioStation/MusicClass";
import Concentrate from "./components/discover/RadioStation/Concentrate";
import Song from "./components/discover/song";
import Rank from "./components/discover/rank";
import RadioDetail from "./components/discover/RadioStation/RadioDetail";
//登录
import Login from './views/login';




// import router from "./router";

class App extends React.Component {
    render(){
        return (
			<Router>
				<div className="App">
					<div className="nav">
						<NavLink to="/discover" activeClassName="activeStyle">
							<i className="iconfont iconmusiccloud"></i>
							<span>发现</span>
						</NavLink>
						<NavLink to="/video" activeClassName="activeStyle">
							<i className="iconfont iconshipin1" aria-hidden="true"></i>
							<span>视频</span>
						</NavLink>
						<NavLink to="/my" activeClassName="activeStyle">
							<i className="iconfont  iconyinyue" aria-hidden="true"></i>
							<span>我的</span>
						</NavLink>
						<NavLink to="/friend" activeClassName="activeStyle">
							<i className="iconfont iconpengyou" aria-hidden="true"></i>
							<span>朋友</span>
						</NavLink>
						<NavLink to="/account" activeClassName="activeStyle">
							<i className="iconfont iconzhanghao" aria-hidden="true"></i>
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
							<Route path="/player/:id" component={Player} />
							<Route path="/album" component={Album} />
				
							<Route path="/search" component={Search} />
							{/* <Redirect from="/my/collection" to="/my/collection/album" >
								<Route path="/my/collection" component={Collection} />
							</Redirect> */}
							<Route path="/my/collection" component={Collection} />
							<Route path="/my/broadcastingStation"component={BroadcastingStation} />
							<Route path="/my/recentlyPlay"component={RecentlyPlay} />
							
							<Route path="/result" component={Result} />
							<Route path="/CD" component={CD} />
							
							<Route path='/playListDetails/:id' component={PlayListDetail}/>
							<Route path='/albumList/:albumId' component={AlbumList}/>
							
							<Route exact path="/radio" component={Radio}/>
							<Route path="/radio/radioclassification" component={RadioClassification}/>
							<Route path="/radio/radiorank" component={RadioRank}/>
							<Route path="/radio/musicclass" component={MusicClass}/>
							<Route path="/radio/concentrate" component={Concentrate}/>
							<Route path="/song" component={Song} />
							<Route path="/rank" component={Rank} />

							<Route path="/radio/radiodetail" component={RadioDetail}/>
							
							<Route path="/login" component={Login}/>

						</Switch>
					</div>
				</div>
			</Router>
        )
    }
}

export default App;
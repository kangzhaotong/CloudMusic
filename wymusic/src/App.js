import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	withRouter
} from 'react-router-dom';
import PlayListDetail from './components/common/PlayListDetail';

class App extends React.Component {
	render() {
		return (
			<div>
				<div onClick={() => {
					this.props.history.push('/playListDetails/2829018936')
				}}>点我</div>

				<Router>
					<Route path='/playListDetails/:id' component={PlayListDetail}/>
				</Router>
			</div>
		)
	}
}

export default withRouter(App);
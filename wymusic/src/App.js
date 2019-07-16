import React from 'react';


import {
	BrowserRouter as Router,
	Route,
	NavLink
} from "react-router-dom";
import router from './router';

class App extends React.Component {
	
	render() {
		return (
			<Router>
				{
					router.map((v, i) => {
						return (
							<Route key={i} exact={v.exact} path={v.path} component={v.component}></Route>
						)
					})
				}

				{/* <Route exact path={'/radio'} component={Radio}></Route>
				<Route path={"/radio/radioclassification"} component={RadioClassification}></Route> */}
			</Router>
		)
	}
}

export default App;

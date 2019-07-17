import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import "./assets/iconfont/iconfont.css";
import store from './store/index'

// axios.defaults.withCredentials=true;
// axios请求带上cookie

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));
serviceWorker.unregister();

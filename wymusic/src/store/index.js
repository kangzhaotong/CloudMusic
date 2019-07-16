
import {createStore,applyMiddleware} from 'redux'
import reducer from './reducers/index'
import thunk from 'redux-thunk'
let store= createStore(reducer,applyMiddleware(thunk));

export default store;

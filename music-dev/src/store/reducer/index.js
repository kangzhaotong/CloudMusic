//孙娉
import video from "./video";
import playlist from './playlist';
import song from './song';

//亢昭彤
import {combineReducers} from 'redux';
import dongtai from './dongtai';
import fans from './fans';
import getSongs from './getSongs'

//张静
import user from './userReducer'



export default combineReducers({
    video, playlist,song,
    dongtai,fans,getSongs,
    user
})
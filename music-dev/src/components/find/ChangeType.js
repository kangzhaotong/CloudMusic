import React from 'react';
import {NavLink} from 'react-router-dom';
class ChangeType extends React.Component{
    render(){
        return(
            <div className='change-type'>
                <NavLink to={'/personal_fm'} exact className='person-change-type' style={{display: 'block'}}>
                    <div>
                        <span className='iconfont change-type-icon'>&#xe73b;</span>
                        <div>私人FM</div>
                    </div>
                </NavLink>
                <NavLink to={'/recommend/songs'} exact className='person-change-type' style={{display: 'block'}}>
                    <div>
                        <span className='iconfont change-type-icon'>&#xe62d;</span>
                        <div>歌曲</div>
                    </div>
                </NavLink>
                <NavLink to={'/top/playlist'} exact className='person-change-type' style={{display: 'block'}}>
                    <div>
                        <span className='iconfont change-type-icon'>&#xe90b;</span>
                        <div>歌单</div>
                    </div>
                </NavLink>
                <NavLink to={'/top/list'} exact className='person-change-type' style={{display: 'block'}}>
                    <div>
                        <span className='iconfont change-type-icon'>&#xe7fa;</span>
                        <div>排行榜</div>
                    </div>
                </NavLink>
            </div>
        )
    }
}
export default ChangeType;
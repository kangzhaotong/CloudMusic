import React from 'react';
import {withRouter} from "react-router-dom"
class PlayBtn extends React.Component {
    render(){
        return (
            <i className='iconfont' style={{fontSize:30}} onClick={()=>this.props.history.push('/song/url')}>&#xe68b;</i>
        )
    }
}
export default withRouter(PlayBtn);

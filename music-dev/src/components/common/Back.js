import React from 'react';
import {withRouter} from "react-router-dom"
class Back extends React.Component {
    render(){
        return (
            <i className='iconfont' style={{fontSize:30}} onClick={()=>this.props.history.go(-1)}>&#xe679;</i>
        )
    }
}
export default withRouter(Back);

import React, {Component} from 'react';
import Paint from "../../components/find/Paint";

export default class Anchor extends Component{
    render() {
        return(
            <div style={{height:'100%',width:'100%'}}>
                电台
                <Paint></Paint>
            </div>
        )
    }
}

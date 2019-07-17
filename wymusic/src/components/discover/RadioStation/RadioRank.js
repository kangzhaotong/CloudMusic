import React from "react";
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import radioCreator from '../../../store/actionCreator/radioStation'; 
import "../../../assets/css/RadioStation/rsPrice.css"


class RadioRank extends React.Component{
    render(){
        return (
            <div>电台排行</div>
        )
    }

    componentDidMount() {
        console.log(2062132164);
    }
}

function mapStateToProps(state){
    // console.log(state)
    return {
        limit:state.radioStation.limit,
        rsPaymentList:state.radioStation.rsPaymentList
    }
}
export default connect(mapStateToProps, dispatch=>bindActionCreators(radioCreator,dispatch))(RadioRank);
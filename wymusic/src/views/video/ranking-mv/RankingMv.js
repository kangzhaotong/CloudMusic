import React from 'react';
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import * as videoAction from "@/store/actionCreator/video"


class RankingMv extends React.Component {
    render() {
        return (
            <div>
                排行榜
            </div>
        )

    }
    componentDidMount(){
        console.log(this.props)
        if(this.props.rankingMvList.length === 0){

        }
    }
}
function mapStateToProps(state){
    console.log(state)
    return {
        rankingMvList:state.rankingMvData.rankingMvList
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators(videoAction,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(RankingMv)

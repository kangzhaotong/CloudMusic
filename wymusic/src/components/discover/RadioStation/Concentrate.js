import React from "react";
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import radioCreator from '../../../store/actionCreator/radioStation'; 
import "../../../assets/css/RadioStation/rsPrice.css"
class Concentrate extends React.Component{
    render(){
        return (
            <div>
                 <input type="button" onClick={() => {
                    this.props.getPaymentList(this.props.limit + 20)
                    }} value={"加载更多"} />
                <div className="back">
                    <i className="iconfont icon-arrow-right" onClick={()=>{
                        this.props.history.go(-1)
                    }}></i><span>付费精品</span>
                </div>    
                <div>
                    {
                        this.props.rsPaymentList.map(v => {
                            return (
                                <div key={v.id} className="payment">
                                    <div><img width="100px" src={v.picUrl}></img></div>
                                    <div>
                                        <h3>{v.name}</h3>
                                        <p>{v.rcmdText}</p>
                                        <p>￥{v.originalPrice/100}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.props.getPaymentList()
    }
}
function mapStateToProps(state){
    // console.log(state)
    return {
        limit:state.radioStation.limit,
        rsPaymentList:state.radioStation.rsPaymentList
    }
}
export default connect(mapStateToProps, dispatch=>bindActionCreators(radioCreator,dispatch))(Concentrate);
import React from "react";
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import radioCreator from '../../../store/actionCreator/radioStation'; 
import "../../../assets/css/RadioStation/rsPrice.css"
class Concentrate extends React.Component{
    constructor(props) {
        super(props);
        this.handle = this.handle.bind(this)
    }
    render(){
        return (
            <div className="wrap-payment" >
                 
                <div className="back">
                    <i className="iconfont icon-arrow-right" onClick={()=>{
                        this.props.history.go(-1)
                    }}></i><span>付费精品</span>
                </div>  
                <div className="payment-box" ref="upPaymentBox" onScroll={this.handle}>
                    {
                        this.props.rsPaymentList.map(v => {
                            return (
                                <div key={v.id} className="payment" onClick={()=>{
                                    this.props.history.push("/radio/radiodetail/"+v.id)
                                }}>
                                    <div><img src={v.picUrl} alt=""></img></div>
                                    <div className="payment-price">
                                        <h3>{v.name}</h3>
                                        <p>{v.rcmdText}<br/>最新上架</p>
                                        <p>￥{v.originalPrice/100}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                <div className="is-load" style={{display:this.props.isLoading?"block":"none"}}>
                    加载中……
                </div>
                </div>
            </div>
        )
    }
    handle(e){
        // let upPaymentBoxHeight=this.refs.upPaymentBox.clientHeight;
        let upPaymentBoxHeight = document.querySelector(".payment-box").clientHeight;
        let documentHeight=document.documentElement.clientHeight;
        let documentTop=document.body.scrollTop;
        // console.log(upPaymentBoxHeight,documentHeight,documentTop)
        if(upPaymentBoxHeight>documentHeight&&upPaymentBoxHeight < documentHeight+documentTop-50&&this.props.limit <= this.props.rsPaymentList.length){
            // console.log("到底了",this.props.limit,this.props.rsPaymentList.length);
            this.props.getPaymentList(this.props.limit + 20);
        }
    }
    componentWillUnmount(){
        document.removeEventListener("scroll",this.handle,true)
    }
    componentDidMount() {
        this.props.getPaymentList();
        document.addEventListener("scroll",this.handle,true)   
    }
}
function mapStateToProps(state){
    return {
        limit:state.radioStation.limit,
        rsPaymentList:state.radioStation.rsPaymentList,
        isLoading:state.radioStation.isLoading
    }
}
export default connect(mapStateToProps, dispatch=>bindActionCreators(radioCreator,dispatch))(Concentrate);
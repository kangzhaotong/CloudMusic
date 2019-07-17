import React from "react";
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import radioCreator from '../../../store/actionCreator/radioStation'; 
import "../../../assets/css/RadioStation/rsPrice.css"
class Concentrate extends React.Component{
    constructor(props) {
        super(props);
        this.state = ({
            limit:20,
          isLoadingMore: false
        });
    }
    render(){
        return (
            <div>
                 
                <div className="back">
                    <i className="iconfont icon-arrow-right" onClick={()=>{
                        this.props.history.go(-1)
                    }}></i><span>付费精品</span>
                </div>  
                <div className="payment-box" ref="upPaymentBox" onTouchMove={this.handle.bind(this)}>
                    {
                        this.props.rsPaymentList.map(v => {
                            return (
                                <div key={v.id} className="payment">
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
                </div>
                <input type="button" ref="wrapper" onClick={() => {
                    this.props.getPaymentList(this.props.limit + 20)
                    }} value={"加载更多"} />
                    
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
            </div>
        )
    }
    handle(){
        let upPaymentBoxHeight=this.refs.upPaymentBox.clientHeight;
        let documentHeight=document.documentElement.clientHeight;
        let documentTop=document.documentElement.scrollTop;
        let documentHeight1=document.body.scrollHeight;
        console.log(upPaymentBoxHeight,documentHeight,documentTop,documentHeight1)
        if(upPaymentBoxHeight>documentHeight&&upPaymentBoxHeight===documentHeight+documentTop-5){
            console.log("到底了");
            this.props.getPaymentList(this.props.limit + 20);
        }  
    }
    componentDidMount() {
        this.props.getPaymentList();
        document.addEventListener("scroll",this.handle())   
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
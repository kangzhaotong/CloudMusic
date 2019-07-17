import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import radioCreator from "../../../store/actionCreator/radioStation";
import "../../../assets/css/RadioStation/rsClass.css"

class RadioClassification extends React.Component{
    render(){
        return (
            <div>
                <div className="back">
                    <i className="iconfont icon-arrow-right" onClick={()=>{
                        this.props.history.go(-1)
                    }}></i><span>电台分类</span>
                </div>
                <div className="class-aa">
                    热门分类
                </div>
                <div className="hotClass-wrap">
                    {
                        this.props.radioSortList.slice(0,6).map(v => {
                        return (
                            <div key={v.id} className="hotClass-box">
                                <div className="hotClass"><img src={v.pic56x56Url} alt=""></img><p>{v.name}</p></div>
                            </div>
                        )
                        })
                    }
                </div>
                <div className="class-aa">
                    更多分类
                </div>
                <div className="hotClass-wrap">
                    {
                        this.props.radioSortList.slice(6).map(v => {
                        return (
                            <div key={v.id} className="hotClass-box">
                                <div className="hotClass"><img src={v.pic56x56Url} alt=""></img><p>{v.name}</p></div>
                            </div>
                        )
                        })
                    }
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.props.getRadioSortList();
        console.log(this.props)
    }
}
function mapStateToProps(state) {
    console.log(state);
    return {
        radioSortList:state.radioStation.radioSortList,
        rsPaymentList:state.radioStation.rsPaymentList
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators(radioCreator,dispatch)

}
export default connect(mapStateToProps,mapDispatchToProps)(RadioClassification);
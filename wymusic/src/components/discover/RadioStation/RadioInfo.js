import React,{Component} from "react";
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import {
    withRouter,
  } from "react-router-dom";
import radioCreator from "../../../store/actionCreator/radioStation";
import "../../../assets/css/RadioStation/rsClass.css"
class RadioInfo extends Component{
    render(){
        return (
            <div className="class-box">
                <div>{this.props.location.state.name}</div>
                <div>
                    {/* <div>热门节目</div>//http://www.qmsdalao.com:3000/dj/program?rid=792451385&limit=40 */}
                </div>
                <div className="class-abc">
                    {
                        this.props.radioClassInfoList.map((v,i) => {
                            return (
                                <div key={i} className="class-aaaa">
                                    <div className="class-b">
                                        <div className="class-img1"><img width="50px" src={v.picUrl} alt=""></img></div>
                                        <div>
                                            <div className="class-c">{v.name}</div>
                                            <div className="class-img2">
                                                <img width="20px" src={v.dj.avatarUrl} alt=""/>
                                                <span>{v.dj.nickname}</span>
                                                <span>|</span>
                                                <span>热度{v.subCount}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div onClick={()=>{
                                    this.props.history.push("/radio/radioinfo/rsinfo/"+v.id)
                                }}>播放</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
    componentDidMount(){
        // console.log( this.props.location.state.id)
        this.props.getRadioClassInfoList(this.props.location.state.id);
    }
}
function mapStateToProps(state){
    console.log(state)
    return {
        radioClassInfoList:state.radioStation.radioClassInfoList,
    }
}
export default withRouter(connect(mapStateToProps,dispatch=>bindActionCreators(radioCreator,dispatch))(RadioInfo));
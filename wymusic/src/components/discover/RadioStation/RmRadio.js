import React,{Component} from "react";
import "../../../assets/css/RadioStation/rsClass.css";
import {withRouter} from "react-router-dom"
class RmRadio extends Component{
    render(){
        return (
            <div className="class-box" >
                <div></div>
                <div className="rm-radio">
                    {
                        this.props.radioClassInfoList.map((v,i) => {
                            return (
                                <div key={i} className="rm-radio-a" onClick={()=>{
                                    this.props.history.push("/radio/radioinfo/rsinfo/"+v.id)
                                }}>
                            
                                        <div className="rm-radio-b"><img  src={v.picUrl} alt=""></img></div>
                                        <div>
                                            <div className="rm-radio-c">{v.name}</div>
                                            <div className="rm-radio-d">
                                                {v.rcmdtext}
                                            </div>
                                            <div className="program-count">
                                                <p>节目：{v.programCount}&nbsp;, &nbsp;订阅：{v.dj.province}</p>
                                                
                                            </div>
                                        </div>
                                   
                                    
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
    }
}

export default withRouter(RmRadio);
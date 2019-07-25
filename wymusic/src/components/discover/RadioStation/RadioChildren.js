import React,{Component} from "react";
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import {
    withRouter,
  } from "react-router-dom";
import radioCreator from "../../../store/actionCreator/radioStation"
class RadioChildren extends Component{
    render() {
        return (
            <div className="radio-children">
                
                    {
                    this.props.popularList.map( (v,i)=> {
                        return (
                            <div key={v.categoryId} className="popular-box">
                                    <div className="play">
                                        <h3 onClick={()=>{
                                            this.props.history.push({
                                                pathname:"/radio/radioinfo",
                                                state:{
                                                    id:v.categoryId,
                                                    name:v.categoryName
                                                }
                                            })
                                        }}
                                        
                                        >{v.categoryName}></h3>
                                        
                                    </div>
                                    <div className="popular-list">
                                    
                                    {
                                        this.props.popularList[i].radios.map( v=> {
                                            return (
                                                <div key={v.id} className="sing" onClick={()=>{
                                                    this.props.history.push("/radio/radiodetail/"+v.id)
                                                }}>
                                                    <div className="radio-ps">

                                                        <img src={v.picUrl} alt=""></img>
                                                        <p>{v.name}</p>
                                                    </div>
                                                    <div>
                                                        <p>{v.rcmdText}</p>
                                                    </div>
                                                </div>
                                                
                                            )
                                        })
                                    } 
                                    </div>
                            </div>    
                        )
                    })
                    }
            </div>
        )
    }
    componentDidMount(){
        this.props.getPopularList();
    }
}
function mapStateToProps(state){
    return{
        popularList:state.radioStation.popularList,
        popularListSon:state.radioStation.popularListSon
    }
}

export default connect(mapStateToProps,dispatch=>bindActionCreators(radioCreator,dispatch))(withRouter(RadioChildren));

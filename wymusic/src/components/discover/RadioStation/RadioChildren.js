import React,{Component} from "react";
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import axios from "axios";
class RadioChildren extends Component{
    render() {
        return (
            <div className="radio-children">
                
                    {
                    this.props.popularList.map( (v,i)=> {
                        return (
                            <div key={v.categoryId}>
                                    <div>
                                        <h3>{v.categoryName}></h3>
                                        <p style={{display:i===1?"block":"none"}}>播放全部</p>
                                    </div>
                                    <div>
                                    
                                    {
                                        this.props.popularList[i].radios.map( v=> {
                                            return (
                                                <div key={v.id} className="sing">
                                                    <div><img width={"100px"} height={"100px"} src={v.picUrl} alt=""></img></div>
                                                    <div>
                                                        <p>{v.name}</p>
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
        console.log(2222,this.props)
    }
}
function mapStateToProps(state){
    return{
        popularList:state.radioStation.popularList,
        popularListSon:state.radioStation.popularListSon
    }
}
function mapDispatchToProps(dispatch){
    return{
        getPopularList(){
            axios.get("http://www.qmsdalao.com:3000/dj/category/recommend")
                .then(({data})=>{
                    
                    const popularList = data.data.splice(0,9);
                    // let popularListSon = []
                    // popularList.map(v => {
                    //     console.log(5555,v.radios)
                    //     popularListSon.push(v.radios)
                    // })
                    
                    dispatch({
                        type: "UP_POPULARLIST",
                        payload: {
                            popularList,  
                        }
                    })
                })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(RadioChildren);
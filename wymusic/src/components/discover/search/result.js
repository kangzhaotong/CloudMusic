import React,{ Component } from 'react';
import {connect} from 'react-redux'
import actionCreate from '../../../store/actionCreator'
import {withRouter} from 'react-router-dom';
import "../../../assets/css/result.css"

class Result extends Component{
    constructor(props){
        super(props);
        this.state={
            val:"",
         
        }
    }
    componentDidMount() {
        const query=this.props.history.location.search;
        const arr = (query.split('='))[1];
        this.props.getResults(arr);
        this.setState({val:arr});
      
    }
   
    back(){
        this.props.history.go(-1);
    }
    remove(){
        this.setState({val:""});
    }
    render(){
        let music=this.props.discover.music;
        return( 
            <div id="result">
                <div className="resultTop">
                    <i className="iconfont iconarrow-right" onClick={this.back.bind(this)}></i>
                    <input type="text" defaultValue={this.state.val} /><span onClick={this.remove.bind(this)}>x</span>
                    <i className="iconfont iconfangdajing"></i>
                </div>
            
                
                <div className="resultDan">
                    <span>单曲</span>
                    <i className="iconfont iconarrow-right1"></i>
                    <div>播放全部</div>
                </div>
                <div className="conend">
                    {
                        (music || []).map((item,index) => {
                            return (<p className='content' key={index}>
                                <span onClick={()=>{
                                    this.props.history.push("/player/"+item.id);
                                }}>{item.name}</span><br />
        
                                <i className="iconfont icon-bofang"></i>
                                <i className="iconfont icon-shudian"></i>
                            </p>)
                        })
                    } 
                </div>
                         
           </div>
        )
    }  

}
let mapState=(state)=>state;
let mapAction=(dispatch, getState)=>{
    const query=getState.history.location.search;
    const arr = (query.split('='))[1];
    return {
      getResults(arr){
        dispatch(actionCreate.getResults(arr));
        }
    }
};
export default connect(mapState,mapAction)(withRouter(Result))

import React,{ Component } from 'react';
import {connect} from 'react-redux';
import actionCreate from '../../../store/actionCreator';
import "../../../assets/css/search.css";
class Search extends Component{
    constructor(props){
        super(props);
        this.state={
            val:"",
            arr:[]
        }
    }
    
    go(){
        this.props.history.go(-1);
    }
    handleChange = async (e)=>{
        this.setState({val:e.target.value});
    }
   
    handleKeyDown= (e)=>{
        if (e.keyCode ===13){
            this.props.history.push("result?keywords="+this.state.val);
        }
    }
     componentDidMount(){
        console.log(this.props);
        this.props.getHot();
    }

    render(){
        let list=this.props.discover.list;

        return(
            <div id="search1">
                {/*搜索*/}   
                <div className='container'>
                    <input type="text" defaultValue={this.state.val} onChange={this.handleChange.bind(this)}   onKeyDown={this.handleKeyDown.bind(this)} className='form-control' placeholder='那个女孩 最近很火哦'/>
                     <i className="iconfont  iconfangdajing"></i>
                    <span onClick={this.go.bind(this)}>取消</span>
                </div>   
                {/*搜索历史*/}
              
                {/*热搜*/}   
                <div className='hotSearch'>
                    <span>热搜榜</span>
                    {
                        list.map((item,index) => {
                            return (<p className='content' key={index} onClick={()=>{
                                this.props.history.push("result?keywords="+item.searchWord);
                            }}>
                                <span>{index+1}</span>
                                <span >{item.searchWord}</span>
                                <span>{item.score}</span>
                                <span>{item.content}</span>
                            </p>)
                        })
                    }
                </div>
                
           </div>
        )
    }                     
 }
 
let mapState=(state)=>state;
let mapAction=(dispatch)=>{
    return {
        getHot(){
            dispatch(actionCreate.getHot())
        }

    }
};
export default connect(mapState,mapAction)(Search);
import React,{ Component } from 'react';
import {connect} from 'react-redux';
import actionCreate from '../../store/actionCreator';
import "../../assets/css/search.css";
import JSONP from  "jsonp";
function jsonp(url,opts={}) {
    return new Promise((resolve,reject)=>{
        JSONP(url,opts, (err,data)=> {
           if (err) reject(err);
           resolve(data);
        })
    })
}
class search extends Component{
    constructor(props){
        super(props);
        this.state={
            val:"",
            arr:[],
            index:-1
        }
    }
    go(){
        this.props.history.go(-1);
    }
    handleChange = async (e)=>{
        this.setState({val:e.target.value});
        let {s} = await jsonp("https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+this.state.val,{param:"cb"});
        this.setState({arr:s});
    }
    handleKeyUp=(e)=>{
        let keyCode = e.keyCode;
        if (keyCode === 38 || keyCode === 40) {
           if (keyCode === 38){
               this.setState({index:this.state.index-1})
               if (this.state.index<0){
                  this.setState({index:this.state.arr.length-1});
               }
                //上下键切换
               e.target.value=this.state.arr[this.state.index+1];
               this.setState({val:e.target.value});
            } else{
               this.setState({index:this.state.index+1})
               if (this.state.index >= this.state.arr.length-1) {
                   this.setState({index:-1});
               }
               e.target.value = this.state.arr[this.state.index+1];
               this.setState({val:e.target.value});
           }
        }
    }
    handleKeyDown= (e)=>{
        if (e.keyCode ===13){
            window.open('http://www.qmsdalao.com:3000/search?keywords=' + this.state.val);
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
                    <input type="text" defaultValue={this.state.val} onChange={this.handleChange.bind(this)} onKeyUp={this.handleKeyUp.bind(this)}  onKeyDown={this.handleKeyDown.bind(this)} className='form-control' placeholder='那个女孩 最近很火哦'/>
                     <i className="iconfont icon-fangdajing"></i>
                    <span onClick={this.go.bind(this)}>取消</span>
                    <ul className='list-group'>
                        {
                            this.state.arr.map((item,key)=>{
                                return <li className={key===this.state.index?"list-group-item active" :"list-group-item"} key={key}>{item}</li>
                        })
                        }
                    </ul>
                   
            
                    <div className='hotSearch'>
                    <span>热搜榜</span>
                    {
                        list.map((item,index) => {
                            return (<p className='content' key={index}>
                                    <span>{index+1}</span>
                                    <span>{item.searchWord}</span>
                                    <span>{item.score}</span>
                                    <span>{item.content}</span>
                            </p>)
                        })
                    }
                </div>
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
export default connect(mapState,mapAction)(search);
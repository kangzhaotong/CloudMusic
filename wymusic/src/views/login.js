
import "../assets/css/login.css"
import React from 'react';
//redux
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actionCreate from '../store/actionCreator/userCreator.js'
import {withRouter} from 'react-router-dom'

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      val:""
    }
  }
  componentDidMount(){
    let phone=document.getElementById("phone").defaultValue;
    let password=document.getElementById("password").defaultValue;
    this.props.getUserInfo(phone,password);
    console.log(phone);
  }
  handleChange = async (e)=>{
    this.setState({val:e.target.value});
  

}
  blurHandler(phone){
    if(!(/^1[3456789]\d{9}$/.test(phone))){
      alert("手机号码错误，请重新输入")
      return false;
    }
  } 
  render() {
    return(
      <div id="login">
          <p className="zi"><img src={require("../assets/images/logo.jpg")} alt="logo" /></p>
          <div className="form">
             <input type="text" id="phone" defaultValue={this.state.val} placeholder="用户名" onChange={this.handleChange.bind(this)} />
             <input type="password"  id="password" defaultValue={this.state.val} placeholder="密码" onChange={this.handleChange.bind(this)} />
              <p className="word">新用户登录即自动注册，并表示已同意<a href="#">《用户服务协议》</a></p>
              <p className="tijiao" onClick={this.blurHandler.bind(this)} >登录</p>
          </div>
      </div>
    )
   
  }

}
let mapState=(state)=>state;
let mapAction=(dispatch)=>{
  return {
    getUserInfo(phone,password){
          dispatch(actionCreate.getUserInfo(phone,password))
      }
      
  }
};
export default connect(mapState,mapAction)(Login);

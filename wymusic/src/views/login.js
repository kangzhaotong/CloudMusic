
import React from 'react';
//redux
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import actionCreate from '../store/actionCreator/userCreator.js';
import "../assets/css/login.css";
class Login extends React.Component {
  render() {
    return( 
      <div id="login">
          <p className="zi"><img src={require("../assets/images/logo.jpg")} alt="logo" /></p>
          <div className="form">
            <input type="text" id="phone" placeholder="用户名"  />
            <input type="password"  id="password" placeholder="密码"  />
            <p className="word">新用户登录即自动注册，并表示已同意<a href="#">《用户服务协议》</a></p>
            <p className="tijiao" onClick={() => {
			        this.props.login(document.getElementById("phone").value, document.getElementById("password").value);
			        this.props.history.push('/account');
            }}>登录</p>
          </div>
      </div>
    )
   
  }

}
let mapState=(state)=>{
	return {}
};
let mapAction=(dispatch)=>{
  return {
    login(phone,password){
      dispatch(actionCreate.getUserInfo(phone,password))
    }      
  }
};

export default connect(mapState,mapAction)(withRouter(Login));

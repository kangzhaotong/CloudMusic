
import "../assets/css/login.css"
import React from 'react';
//redux
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actionCreate from '../store/actionCreator/userCreator.js'
import {withRouter} from 'react-router-dom'
import axios from 'axios'
class Login extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      val:"",
      phone: "",
      password: ""
    }
  }
  loginStatus(){
    return new Promise((res,rej)=>{
        axios.get('/wymusic/login/status').then(({data})=>{
            if(data.code === 200){
                res(data)
            }else{
                rej("网络错误")
            }
        })
    })

}
  render() {
    return( 
      <div id="login">
          <p className="zi"><img src={require("../assets/images/logo.jpg")} alt="logo" /></p>
          <div className="form">
             <input type="text" id="phone" defaultValue={this.state.val} placeholder="用户名"  />
             <input type="password"  id="password" defaultValue={this.state.val} placeholder="密码"  />
              <p className="word">新用户登录即自动注册，并表示已同意<a href="#">《用户服务协议》</a></p>
              <p className="tijiao" onClick={() => {
                  this.setState({
                    phone: document.getElementById("phone").value,
                    password: document.getElementById("password").value
                  }, () => {
                    axios.get('/wymusic/login/cellphone', {
                      params: {
                          phone:this.state.phone,
                          password:this.state.password,
                      }
                  }).then(({data}) => {
                      console.log(222222,data)
                      if (data.code === 200) {
                          this.loginStatus().then((data) => {
                              localStorage.userInfo = JSON.stringify(data.profile);
                              localStorage.token = true;
                              this.props.history.push('/account');
                          }).catch((msg)=>{console.log(msg)});
                      }
                  })
                  });


                     
              }}>登录</p>
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

import React from 'react'
import axios from  'axios'
import { Modal} from 'antd-mobile';
//如果不写就是pc端的prompt
const prompt = Modal.prompt;
const alert = Modal.alert;
Modal.wrapClassName = 'log_reg'

export const log_reg = function (fn){
    prompt(
    '手机号登录',
    '',
    [{text:'取消',onPress:()=>{console.log('取消登录')}},{text:(<span style={{color:'red'}}>确定</span>),onPress:(login, password)=>{loginHandler.call(this,login,password,fn)}}],
    'login-password',
    null,
    ['请输入你的手机号', '密码请输入'],'android'
)}
function loginHandler(phone,password,fn) {
    if(!(/^1[3456789]\d{9}$/.test(phone))){
        alert("手机号码有误，请重填",'',[{text:'确定',onPress:()=>{console.log(111)},style:({color:'red'})}]);
        return false;
    }
    fn(phone,password,this);
}













// (login, password) => console.log(`login: ${login}, password: ${password}`)
//传参顺序
// Modal.prompt(title, message, callbackOrActions, type?, defaultValue?, placeholders?, platform?)
//属性  参数格式          参数类型    默认值
// callbackOrActions	按钮组 {text, onPress} 或回调函数	Array or Function	无
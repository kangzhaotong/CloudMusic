import React from 'react';
import './App.css';
import axios from "axios";
import Dongtai from './pages/Dongtai'
import Details from './pages/Details'
import My from './pages/My'
import {
BrowserRouter as Router,
Route,
NavLink
} from 'react-router-dom'

export default class App extends React.Component{
 constructor(){
   super();
   this.state={}
 }
   render(){
     return (
      <div className="App">   
        <Router>
          <NavLink exact to={"/dongtai"}>去吧皮卡丘</NavLink>
          <Route exact path={"/dongtai"} component={Dongtai}></Route>
          <Route exact path={"/my"} component={My}></Route>
          <Route exact path={"/details"} component={Details}></Route>
        </Router>
    </div>
    )
   }
   componentWillMount(){
    axios.get('http://swmonk.top:3000/login/cellphone?phone=17660821849&password=kzt123.@.').then(({data})=>{
      //  console.log(data)
  })
   }
}
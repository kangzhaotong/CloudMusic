import React, { Component } from 'react'
import './index.css'
export default class Commona extends Component {
    constructor(props) {
        super(props)
        console.log(this.props)
        this.state={
            recommend_radio:[]
        }
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps)
        this.setState({
            recommend_radio:nextProps.recommend_radio
        },()=>{
           
            console.log(this.state.recommend_radio)
        })
      
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log(nextState.recommend_radio.length,nextState)
        if(nextState.recommend_radio.length===0){
            return false
        }else{
            return true
        }
        
    }
    render() {
        return (

            <div>
                <div className="dy_module" >
                    <h3>
                        <span>
                            <img src={require("../../../assets/images/22.gif")} alt="" />
                        </span>
                        <a>{this.props.init}</a>

                        <i className="iconfont iconarrow-right1"></i>
                    </h3>
                    <div className="dy_module_content">
                        <ul>
                            {
                                // console.log(this.state,11111)
                                this.state.recommend_radio.map((v, i) => {
                                    if(v.picUrl){
                                        return (
                                            <li key={i}>
                                                     <img src={v.picUrl} alt="" />
                                                   <p>{v.name}</p>
                                            </li>
                                        )
                                    }else{
                                        return (
                                            <li key={i}>
                                                     <img src={v.coverUrl} alt="" />
                                                        <p>{v.title}</p>
    
                                               
                                            </li>
                                        )
                                    }
                                    
                                })
                            }
                        </ul>
                    </div>
                    {
                        this.props.name=='1'?  <button className="load_more" >更多专辑</button>:''
                    }
                </div>
            </div>

        )
    }
}

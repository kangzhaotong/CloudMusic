import React from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
class AnchorRadio extends React.Component{
    constructor(){
        super();
        this.state={
            anchorList:[]
        }
    }
    componentWillMount() {
        this.getTopMusic.bind(this)();
    }
    getTopMusic(){
        axios.get("http://swmonk.top:3000/personalized/djprogram")
            .then(({data})=>{
                let arr = data.result.slice(0, 6);
                this.setState({
                    anchorList:arr
                })
            })
    }
    render(){
        return(
            <div>
                <NavLink to={'/anchor'} exact style={{display:'block'}}>
                    <div className='top-music-menu-tit'>
                        主播电台
                        <i className='iconfont'>&#xe634;</i>
                    </div>
                </NavLink>
                <div style={{overflow:'hidden'}}>
                    <ul style={{width:'100%',overflow:'hidden'}}>
                        {
                            this.state.anchorList.map((v,i)=>{
                                return (
                                    <li style={{width:'29%',float:'left',margin:'18px 2%'}} key={i}>
                                        <NavLink to={
                                            {
                                                pathname:'',
                                                state:{
                                                    id:v.id
                                                }
                                            }
                                        } key={i}>
                                            <img src={v.picUrl} alt="" style={{width:'100%'}}/>
                                            <p className='top-music-menu-name'>{v.name}</p>
                                        </NavLink>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
export default AnchorRadio;
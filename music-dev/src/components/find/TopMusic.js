import React from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
//推荐歌单的tit，点击跳转路由MusicList
// import MusicList from '../../views/Find/MusicList'
//推荐歌单下面的那6个，接口是/recommend/resource
class TopMusic extends React.Component{
    constructor(){
        super();
        this.state={
            recommend:[]//获取数据列表
        }
    }
    componentWillMount() {
        this.getTopMusicMenu.bind(this)();
    }
    getTopMusicMenu(){
        axios.get("/personalized")
            .then(({data})=>{
                let arr = data.result.slice(0,6);
                this.setState({
                    recommend:arr
                })
            })
    }
    render(){
        return(
            <div>
                <NavLink to={'/top/playlist'} exact style={{display:'block'}}>
                    <div className='top-music-menu-tit'>
                        推荐歌单
                        <i className='iconfont'>&#xe634;</i>
                    </div>
                </NavLink>
                <div style={{overflow:'hidden'}}>
                    <ul style={{width:'100%',overflow:'hidden'}}>
                        {
                            this.state.recommend.map((v,i)=>{
                                return (
                                    <li style={{width:'29%',height:'190px',float:'left',margin:'8px 2%',position:'relative'}} key={i}>
                                        <NavLink to={
                                            {
                                                pathname:'/playlist/detail',
                                                state:{
                                                    id:v.id
                                                }
                                            }
                                        } key={i}>
                                            <img src={v.picUrl} alt="" style={{width:'100%'}}/>
                                            <p className='top-music-menu-name'>{v.name}</p>
                                            <div style={{color:'#fff',position:'absolute',top:0,right:0}}>
                                                <i className='iconfont'>&#xe640;</i>
                                                {
                                                    v.playCount>100000000?((v.playCount/100000000).toFixed(1)+'亿'):(v.playCount>100000 && v.playCount<100000000?(parseInt(v.playCount/10000)+'万'):parseInt(v.playCount))
                                                }
                                            </div>
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
export default TopMusic;
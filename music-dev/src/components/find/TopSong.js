import React from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
class TopSong extends React.Component{
    constructor(){
        super();
        this.state={
            playlists:[]
        }
    }
    componentWillMount() {
        this.getTopMusic.bind(this)();
    }
    getTopMusic(){
        axios.get("http://swmonk.top:3000/personalized/newsong?num="+Math.random())
            .then(({data})=>{
                let arr = data.result.slice(0, 6);
                this.setState({
                    playlists:arr
                })
            })
    }
    render(){
        return(
            <div>
                <NavLink to={'/top/song'} exact style={{display:'block'}}>
                    <div className='top-music-menu-tit'>
                        最新音乐
                        <i className='iconfont'>&#xe634;</i>
                    </div>
                </NavLink>
                <div style={{overflow:'hidden'}}>
                    <ul style={{width:'100%',overflow:'hidden'}}>
                        {
                            this.state.playlists.map((v,i)=>{
                                return (
                                    <li style={{width:'29%',float:'left',margin:'18px 2%'}} key={i}>
                                        <NavLink to={
                                            {
                                                pathname:'/top/play/highquality',
                                                state:{
                                                    id:v.id
                                                }
                                            }
                                        } key={i}>
                                            <img src={v.song.album.picUrl} alt="" style={{width:'100%'}}/>
                                            <p className='top-music-menu-name'>{v.song.album.name}</p>
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
export default TopSong;
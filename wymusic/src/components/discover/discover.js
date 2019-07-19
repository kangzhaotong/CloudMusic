import React,{ Component } from 'react';

import {connect} from 'react-redux'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import "../../assets/css/home.css"
import actionCreate from '../../store/actionCreator/index.js';


class Home extends Component{
    constructor(props){
        super(props);
        //关键就是这里，把要使用this的函数  在构造函数中用bind方法传入this
        this.tuijian = this.tuijian.bind(this);
        this.seaHandler = this.seaHandler.bind(this);
        this.song=this.song.bind(this);
        this.rank=this.rank.bind(this);
    }
    seaHandler(){
        this.props.history.push("/search");
    }
    tuijian(){
        this.props.history.push("/everyday");
    }
    componentDidUpdate(){
        new Swiper ('.swiper-container', {
            loop: true,  //循环
            autoplay: {   //滑动后继续播放（不写官方默认暂停）
                disableOnInteraction: false,
      
            },
            pagination: {  //分页器
                el: '.swiper-pagination'
            }
        })
    song(){
        this.props.history.push("/song");
    }
    rank(){
        this.props.history.push("/rank");
    }
    render(){
        let firstbannerlist=this.props.discover.firstbannerlist;
        console.log(firstbannerlist)
        let SellPoints=this.props.discover.SellPoints;
        let newSongs=this.props.discover.newSongs;
        return(
            <div id="discover">
                <div id="header">
                    <i className="iconfont iconhuatong" onClick={() => {
                            this.props.history.push('/login')
                        }}></i>
                    <div className="search"onClick={this.seaHandler} >
                        <input type="text" placeholder="大家都在搜 隔壁老樊" />
                        <i className="iconfont iconfangdajing"></i>
                    </div>
                    <i className="iconfont  iconyinlebofangxuanlvjiezou"></i>
                </div>
                {/*轮播图*/}
                <div className='firstbanner'>
                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                                {
                                    firstbannerlist.map((item,index) => {
                                        return <div key={index} className="swiper-slide" id="box"><img src={item.imageUrl}  alt="完美"/></div>
                                    })
                                }
                            </div>
                          <div className="swiper-pagination"></div>
                        </div>
                    </div>
                {/*每日推荐*/}
                <div id="everyday">
                    <li onClick={this.tuijian}>
                        <img src={require("../../assets/images/1.jpg")} alt=""/>
                        <span>每日推荐</span>
                    </li>
                    <li onClick={this.song}>
                        <img src={require("../../assets/images/2.jpg")} alt=""/>
                        <span>歌单</span>
                    </li>
                    <li onClick={this.rank}>
                        <img src={require("../../assets/images/3.jpg")} alt=""/>
                        <span>排行榜</span>
                    </li>
                    <li onClick={()=>{
                        this.props.history.push("/radio")
                    }}>
                        <img src={require("../../assets/images/4.jpg")} alt=""/>
                        <span>电台</span>
                    </li>
                    <li>
                        <img src={require("../../assets/images/5.jpg")} alt=""/>
                        <span>直播</span>
                    </li>
                </div>

                {/*推荐歌单*/}
                <div className="sellPoints">
                    <p>推荐歌单</p>
                    <p>歌单广场</p>
                    <div>{
                        SellPoints.map((item,index) => {
                            return <p className='content' key={index} onClick={() => {
                                this.props.history.push('/playListDetails/'+item.id)
                            }}>
                                <img key={index} src={item.picUrl} alt="完美"/>
                                <span>{item.name}</span>
                            </p>

                        })
                    }
                    </div>
                </div>

                {/*新碟，新歌*/}
                <div className="newSongs">
                    <p>新碟、新歌</p>
                    <p onClick={() => {
                        this.props.history.push('/album')
                    }}> 数字专辑</p>
                    <p onClick={() => {
                        this.props.history.push('/CD')
                    }}>更多新碟</p>
                    <div>
                        {
                            newSongs.map( (item,index) => {
                                return <p className='content' key={index} onClick={() => {
                                    this.props.history.push('/newsSongList/'+item.id);
                                }}>
                                    <img key={index} src={item.picUrl}  alt="完美"/>
                                    <span>{item.name}</span>
                                </p>

                            })
                        }
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        // console.log(this.props);
        this.props.getBanner();
        this.props.getData();
        this.props.getSong();
    }
}
let mapState=(state)=>state;
let mapAction=(dispatch)=>{
    return {
        getBanner(){
            dispatch(actionCreate.getBanner())
        },
        getData(){
            dispatch(actionCreate.getData())
        },
        getSong(){
            dispatch(actionCreate.getSong())
        }
    }
};
export default connect(mapState,mapAction)(Home);
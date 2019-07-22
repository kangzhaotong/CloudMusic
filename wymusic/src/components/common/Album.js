import React,{ Component } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';
import actionCreate from '../../store/actionCreator/AlbumListCreator.js';
import "../../assets/css/Album.css"
class Album extends Component{
  constructor(props){
      super(props);

  }
  back(){
    this.props.history.push("/discover");
  }
  
   componentDidMount(){
      this.props.getAlbumlun();
      this.props.getAlbum();
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
}

  render(){
    let albumLun=this.props.AlbumList.albumLun;
    let AlbumPut=this.props.AlbumList.AlbumPut
      return(
          <div id="album">
              <div className="albumTop">
                <i className="iconfont iconfanhui" onClick={this.back.bind(this)}></i>
                <span>数字专辑</span>
                <i className="iconfont iconyinlebofangxuanlvjiezou"></i>
              </div>

              {/*轮播图*/}
              <div className='firstbanner'>
                <div className="swiper-container first-swiper" id="first-swiper">
                    <div className="swiper-wrapper" >{
                        albumLun.map((item,index) => {
                            return <div key={index} className="swiper-slide" id="lunBox"><img src={item.pic}  alt="完美"/></div>
                        })
                    }
                    </div>
                    <div className="swiper-pagination first-pagination"></div>
                </div>
            </div>
              {/*导航*/}
            <div className="Anav">
                <li>
                  <img src={require("../../assets/images/8.jpg")} alt="" />
                  <span>畅销榜</span>
                </li>
                <li>
                  <img src={require("../../assets/images/9.jpg")} alt="" />
                  <span>语种风格馆</span>
                </li>
                <li>
                  <img src={require("../../assets/images/10.jpg")} alt="" />
                  <span>已购</span>
                </li>
            </div>

            {/*最新上架*/}
            <div className="putaway">
                <div className="head">
                  <span>最新上架</span>
                  <i className="iconfont iconarrow-right1"></i>
                </div>
                <div className="con">
                  {
                    AlbumPut.map( (item,index) => {
                        return <p className='content' key={index}>                         
                          <img  src={item.blurPicUrl} alt="完美" />
                          <span>{item.name}</span>
                          
                            {
                              item.artists.map((i,index)=>{
                                return (<span key= {index} className="nei">{i.name}</span>)
                              })
                            }
                            <span className="price">￥20</span>
                         
                        </p>
                    })
                  }
                </div>
            </div>
         </div>
      )
  }                     
}

let mapState=(state)=>state;
let mapAction=(dispatch)=>{
  return {
    getAlbumlun(){
      dispatch(actionCreate.getAlbumlun())
    },
    getAlbum(){
      dispatch(actionCreate.getAlbum())
    }
  }
};
export default connect(mapState,mapAction)(withRouter(Album));
import React , {Component} from "react"
import '../../assets/css/song.css'

import {connect} from 'react-redux';
import actionCreate from '../../store/actionCreator/index';
import { Carousel, WingBlank } from 'antd-mobile';
class Song extends Component{
    state = {
      data: ['1', '2', '3'],
      imgHeight: 176,
    }

    constructor(props){
      super(props);
      //关键就是这里，把要使用this的函数  在构造函数中用bind方法传入this
      this.back = this.back.bind(this);
      this.run = this.run.bind(this);

    }
      back(){
          this.props.history.go(-1);
      }
      run(){
          this.props.history.push("/run");
      }
        componentDidMount(){
          this.props.getSongList(); 
          this.props.getMv();

          setTimeout(() => {
            this.setState({
              data: ['http://p1.music.126.net/MioOaohWsa22uf8jFMY6ng==/109951164222422097.jpg', 
              'http://p1.music.126.net/EAb452hS9EuyPdfdAdjJKA==/109951164223085147.jpg',
               'http://p1.music.126.net/7oXTHSTFUxzgnXtzQJGaRQ==/109951164223533458.jpg'],
            });
          }, 100);
    }

    render(){
        let songList=this.props.discover.songList;
        let mvList=this.props.discover.mvList;
        return(
            <div>
              <div className="head">
                <i className="iconfont iconfanhui" onClick={this.back}></i>
                <span style={{fontSize:'20px'}}>歌单广场</span>
                <i className="iconfont iconyinlebofangxuanlvjiezou"></i>
              </div>
              <div className="nav1">
                {
                  songList.map((item,index)=>{
                    return <p key={index}>
                              {item.name}
                          </p>
                  })
                }
                
              </div>
              <div className="banner1">
                <WingBlank>
                  <Carousel className="space-carousel"
                    frameOverflow="visible"
                    cellSpacing={10}
                    slideWidth={0.7}
                    infinite
                    afterChange={index => this.setState({ slideIndex: index })}
                  >
                    {this.state.data.map((val, index) => (
                      <div  key={index}
                      style={{
                        display: 'block',
                        position: 'relative',
                        top: this.state.slideIndex === index ? -10 : 0,
                        height: this.state.imgHeight,
                        boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
                      }}>
                        <img
                          src={val}
                          alt=""
                          style={{ width: '100%', verticalAlign: 'top',zIndex:'1000',height:'190px'}}
                          onLoad={() => {
                         
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: '200' });
                          }}
                        />
                      </div>
                    ))}
                  </Carousel>
                </WingBlank>
              </div>
              <div className="mainContent">
                {
                  mvList.map((item,index)=>{
                    return <p key={index} onClick={() => {
                      this.props.history.push('/playListDetails/'+item.id)
                  }}>
                      <img width={'100%'} style={{borderRadius:'10%'}} src={item.coverImgUrl} alt="" />
                      <span>
                        {item.name}
                      </span>
                    </p>
                  })
                }
              </div>



            </div>
        )
  }
}
let mapState=(state)=>state
let mapAction=(dispatch)=>{
  return {
    getSongList(){
    dispatch(actionCreate.getSongList())
  },
  getMv(){
    dispatch(actionCreate.getMv())
  },
}
}



export default connect(mapState,mapAction)(Song);
import React , {Component} from "react"
import '../../assets/css/song.css'

import {connect} from 'react-redux';
import actionCreate from '../../store/actionCreator/index'
class Song extends Component{
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
                    return <p className='content' key={index} >
                            <span>
                              {item.name}
                            </span>
                          </p>
                  })
                }
                <i className="iconfont icongengduo"></i>
                
              </div>
              <div className="banner1">

              </div>
              <div className="mainContent">
                {
                  mvList.map((item,index)=>{
                    return <p key={index}>
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
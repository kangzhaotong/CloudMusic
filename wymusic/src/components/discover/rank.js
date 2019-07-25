import React , {Component} from "react"
import '../../assets/css/rank.css'
import {connect} from 'react-redux';
import actionCreate from '../../store/actionCreator/rank'

class Rank extends Component{
    constructor(props){
        super(props);
        //关键就是这里，把要使用this的函数  在构造函数中用bind方法传入this
        this.back = this.back.bind(this);
        // this.run = this.run.bind(this);
  
    }
    back(){
        this.props.history.go(-1);
    }
    run(id){
        this.props.history.push("/playListDetails/"+id)
    }

    componentDidMount(){
      this.props.getGf();
      this.props.getTj();
      this.props.getQq();
      this.props.getMore();
    }
    render(){
        let gfList=this.props.Rank.gf;
        let guanfang=gfList.slice(0,4);
        let tjList=this.props.Rank.tj;
        let tuijian=tjList.slice(4,10);
        let qqList=this.props.Rank.qq;
        let quanqiu=qqList.slice(14,20)
        let moreList=this.props.Rank.more;
        let gengduo=moreList.slice(10,25)
        return(
            <div id="paihang">
              <div className="header">
                <i className="iconfont iconfanhui" style={{color:'#000000'}} onClick={this.back}></i>
                <span>排行榜</span>
                <i className="iconfont iconyinlebofangxuanlvjiezou" style={{color:'#000000'}}></i>
              </div>
              <div className="guanfangrank">
                <div className="title">官方榜</div>
                {
                  guanfang.map((item,index)=>{
                    return (
                      <div className="content" key={index}  onClick={()=>{
                          this.run(item.id)
                      }}>
                        <img src={item.coverImgUrl} style={{width:'130px',height:'130px',borderRadius:'10%'}} alt="" />
                        <p className="music">
                          {
                          item.tracks.map((v,i)=>{
                            return <span key={i}>
                                      {i+1}. {v.first} - {v.second}
                                  </span>
                          })
                        }
                        </p>
                      </div>
                    )                        
                  })
                } 
              </div>
              <div className="tuijianrank">
                <div className="title">推荐榜</div>
                <div className="content">
                  {
                    tuijian.map((item,index)=>{
                      return (
                        <div key={index} onClick={()=>{
                            this.run(item.id)
                        }}>
                            <img src={item.coverImgUrl} style={{width:'100%',borderRadius:'10%'}} alt="" />
                            <p>{item.name}</p>
                            <p>{item.updateFrequency}</p>
                        </div>
                      )
                    })
                  } 
                </div>
              </div>
              <div className="quanqiurank">
                <div className="title">全球榜</div>
                <div className="content">
                 {
                  quanqiu.map((item,index)=>{
                    return <div key={index} onClick={()=>{
                        this.run(item.id)
                    }}>
                            <img src={item.coverImgUrl} style={{width:'100%',borderRadius:'10%'}} alt="" />
                            <p>{item.name}</p>
                          </div>
                  })
                } 
                </div>
              </div>
              <div className="morerank">
                <div className="title">更多榜单</div>
                <div className="content">
                {
                  gengduo.map((item,index)=>{
                    return <div key={index} onClick={()=>{
                        this.run(item.id)
                    }}>
                            <img src={item.coverImgUrl} style={{width:'100%',borderRadius:'10%'}} alt="" />
                            <p>{item.name}</p>
                          </div>
                  })
                }
                </div>
              </div>
            </div>
        )
    }
}
let mapState=(state)=> {
  // console.log(1111, state)
  return state;
}
let mapAction=(dispatch)=>{
  return {
    getGf(){
      dispatch(actionCreate.getGf())
    },
    getTj(){
      dispatch(actionCreate.getTj())
    },
    getQq(){
      dispatch(actionCreate.getQq())
    },
    getMore(){
      dispatch(actionCreate.getMore())
    },
  }
}
export default connect(mapState,mapAction)(Rank);
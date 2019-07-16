import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import date from '../filter/index';
import getSongs from '../store/action/getSongs'
class Details extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            data: this.props.location.state,
            comments:[],
            songs:JSON.parse(this.props.location.state.json)
        };
       this.props.getSongs(this.state.songs.song.id?this.state.songs.song.id:1377729716)
        
    }
 
    render() {
        {
            console.log(this.props.details.getSongs.data,this.state.songs.song)
        }
        return (
                <div key={Date.now() + 1}  className="content infinite-scroll infinite-scroll-bottom" data-distance="100">
                    <p onClick={()=>{this.props.history.go(-1)}}><a className="button button-big">返回</a></p>
                    <div className="card facebook-card " style={{backgroundImage: 'url('+this.state.data.user.backgroundUrl+')'}}>
                        <div className="card-header no-border">
                            <div className="facebook-avatar">
                                <img src={this.state.data.user.avatarUrl} width="34" height="34" />
                            </div>
                            <div className="facebook-name" style={{ textAlign: "left" }}>
                                <span style={{color:"blue"}}>{this.state.data.user.nickname}</span>
                            <span style={{color:"whilte",fontSize:"12px"}}>  {this.state.data.info.commentThread.resourceTitle}:</span>
                            </div>
                            <div className="facebook-name" style={{ textAlign: "left" }}>{date(this.state.data.showTime)}</div>

                        </div>
                        <div className="card-content" style={{height:""}}>
                            <div>{JSON.parse(this.state.data.json).msg}</div>
                            { this.state.data.pics?this.state.data.pics.map((v,i)=>{
                              return <div key={i} style={{float:"left",width:"103px", height:"133px",marginLeft:"13px"}}>
                                  <img src={v.originUrl}  width="100px" height="130px"/>
                                  </div> 
                                }):"加载中。。。。"}
                                 <div style={{width:"320px",height:"60px",clear:"both",border:"1px solid grey",marginLeft:"10px"}} onClick={      
                                ()=>{var yinyue=document.getElementById("yinyue");
                                if (yinyue.paused) { //判断当前的状态是否为暂停，若是则点击播放，否则暂停
                                    yinyue.play();
                                }else{
                                    yinyue.pause();
                                }
                                 }}>
                                  <span style={{float:"left",marginLeft:"5px"}}><img src={this.state.songs.song.album.img80x80} alt="dasdsa"   width="60px" height="60px"/></span>
                                 <span style={{width:"60px",height:"60px" ,textAlign:"center",lineHeight:"60px",float:"left",color:"white"}}>{this.state.songs.song.album.name}</span>
                                 <span style={{width:"60px",height:"60px" ,textAlign:"center",lineHeight:"60px",float:"left",color:"white",fontSize:"12px"}}>{(this.state.songs.song.artists)[0].name}</span>
                                   { 
                                        this.props.details.getSongs.data?this.props.details.getSongs.data.map((v,i)=>{
                                        return <span key={i} style={{float:"left",width:"60px",height:"60px"}}><audio  src={v.url} id="yinyue"> </audio></span>
                                       }):""
                                       
                                      
                                   }
                                </div>
                        </div>
                       
                        <div className="card-footer no-border" style={{clear:"both"}}>
                        <a href="#" className="link" onClick={()=>{
                 
                            
                    //   }}
                            // axios.get("http://swmonk.top:3000/comment/like?type=6&cid=1419532712&threadId="+v.info.threadId+"&t=0").then(data=>{
                            //     console.log(data,22222222222222222)
                            //     axios.get('http://swmonk.top:3000/event?pagesize=10')
                            //     .then(({ data }) => {
                            //         // console.log(data.event);
                            //         this.setState({
                            //             event: data.event
                            //         })
                            //     })
                            // })
                           }}>赞{this.state.data.info.likedCount}</a>
                     <a href="#" className="link">评论{this.state.data.info.commentCount}</a>
                     <a href="#" className="link">分享{this.state.data.info.shareCount}</a>
                        </div>
                    
                    </div>  
                    {
                           this.state.comments.map((v,i)=>{
                               return(
                                    <div className="card" key={i} style={{clear:"both",background:"white"}}>
                                        {/* {console.log(v)} */}
                                        <div style={{textAlign:"left"}}>
                                     <span style={{width:"140px",display:"inline-block",height:"40px"}}>
                                     <img src={v.user.avatarUrl} width="40px" height="40px" style={{borderRadius:"50%",marginLeft:"1px"}}/>
                                        <span style={{lineHeight:"15px"}}>{v.user.nickname}</span>
                                     </span>
                                        <span style={{marginLeft:"174px",color:"aqua"}} onClick={()=>{
                                               v.likedCount=+1
                                        }}> <span className="icon icon-star"></span>{v.likedCount}</span>
                                        </div>
                                <div className="card-content">
                                    <div className="card-content-inner">{v.content}</div>
                                </div>
                                <div className="card-footer">卡脚</div>
                            </div>
                               )
                           })
                       }
                </div>
              
        )
    }
    componentWillMount() {
        axios.get('http://swmonk.top:3000/comment/event?threadId=' + this.state.data.info.threadId)
            .then(({ data }) => {
                // console.log(data.comments);
                this.setState({
                    comments:data.comments
                })
            })
    }
 
}
function mapStateToProps(state) {
    //这里是将你store中的state也就是你ruducer中返回的数据映射到你的props中，这样你才能在上面中的props中拿到数据
    //所以在上面constructor中this.props.dt打印出来就是你的axios返回请求的数据dongtai[],fans[]，
    return ({
        details: state
    })
}
function mapDispatchToprops(dispatch) {
    //这里的意思就是先将你的action中的函数映射到你当前页面的props中这样你才能在上面拿到this.props.fans()和this.props.fans()
    //一旦你上面写了this.props.fans()和this.props.fans()它就会触发下面的dispatch从而触发store中action中相应的函数，
    return bindActionCreators({...getSongs}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToprops)(Details)
import React from 'react';
import axios from 'axios';
import date from '../filter/index';
export default class Details extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            data: this.props.location.state,
            comments:[]
        };
        console.log(this.state.data)
    }
    render() {
        return (
                <div key={Date.now() + 1}  className="content infinite-scroll infinite-scroll-bottom" data-distance="100">
                    <p onClick={()=>{this.props.history.go(-1)}}><a className="button button-big">返回</a></p>
                    <div className="card facebook-card" >
                        <div className="card-header no-border">
                            <div className="facebook-avatar">
                                <img src={this.state.data.user.avatarUrl} width="34" height="34" />
                            </div>
                            <div className="facebook-name" style={{ textAlign: "left" }}>
                                <span style={{color:"blue"}}>{this.state.data.user.nickname}</span>
                            <span style={{color:"whilte"}}>  {this.state.data.info.commentThread.resourceTitle}:</span>
                            </div>
                            <div className="facebook-name" style={{ textAlign: "left" }}>{date(this.state.data.showTime)}</div>

                        </div>
                        <div className="card-content" style={{height:"240px"}}>
                            <div>{JSON.parse(this.state.data.json).msg}</div>
                            {this.state.data.pics.map((v,i)=>{
                              return <div key={i} style={{float:"left",width:"103px", height:"103px",marginLeft:"13px"}}><img src={v.originUrl}  width="100px" height="130px"/></div> 
                                })}
                        </div>
                        <div className="card-footer no-border" style={{clear:"both"}}>
                        <a href="#" className="link" onClick={()=>{
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
                                    <div className="card" key={i} style={{clear:"both",background:"grey"}}>
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

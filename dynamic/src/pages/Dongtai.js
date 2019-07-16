import React from 'react'
import axios from 'axios'
import Botton from '../components/Bottom'
import { connect } from 'react-redux';
import dongtai from '../store/action/dongtai'
import fans from '../store/action/fans'
import { bindActionCreators } from 'redux';
axios.defaults.withCredentials = true;
class Dongtai extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            event: [],
            data: {},
            fans: [],
        }
        // this.setState({
        //     event:this.props.a.dongtai
        //   })
        this.props.dongtai_a()
        this.props.fans() 
        console.log(this.props.dt.dongtai, this.state.event, this.props, 54549752896);
    }
    render() {
        {
            
           
        }
        return (
            <div>
                <div className="page-group">
                    <div className="page ">
                        <header className="bar bar-nav">
                            <a className="icon icon-me pull-left open-panel"></a>
                            {
                           this.props.dt.fans?this.props.dt.fans.map((v, i) => {
                                    return (<img src={v.avatarUrl} width="40px" height="40px" style={{ borderRadius: "50%" }} key={i} />)
                                }):""
                            }
                        </header>
                        <Botton {...this.props}></Botton>
                        <div className="content">
                            <div className="content-block">
                                {
                                this.props.dt.dongtai?this.props.dt.dongtai.map((v, i) => {
                                        return (
                                            <div key={i}>
                                                <div className="card facebook-card" >
                                                    <div className="card-header no-border">
                                                        <div className="facebook-avatar">
                                                            <img src={v.user.avatarUrl} width="34" height="34" />
                                                        </div>
                                                        <div className="facebook-name" style={{ textAlign: "left" }}>{v.user.nickname}</div>
                                                        <div className="facebook-name" style={{ textAlign: "left" }}>{v.rcmdInfo?v.rcmdInfo.userReason:" "}</div>
                                                    </div>
                                                    <div className="card-content" onClick={() => {
                                                        this.props.history.push({ pathname: "/details", state: v })
                                                    }}>
                                                        <div> {JSON.parse(v.json).msg}</div>
                                                        {v.pics.map((v, i) => {
                                                            return <div key={i} style={{ float: "left", width: "103px", height: "103px" }}><img src={v.originUrl} width="100px" height="100px" /></div>
                                                         })}
                                                             <div style={{width:"320px",height:"50px",clear:"both",border:"1px solid grey",marginLeft:"2px"}}>
                                                              这个地方我想放歌曲来着
                                                              <audio src="" autoPlay> </audio>
                                                            </div>
                                                    </div>
                                                    <div className="card-footer no-border">
                                                        <a  className="link" onClick={() => {
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
                                                        }}>赞{v.info.likedCount}</a>
                                                        <a  className="link">评论{v.info.commentCount}</a>
                                                        <a  className="link">分享{v.info.shareCount}</a>
                                                    </div>

                                                </div>
                                            </div>
                                        )
                                    }):"加载中。。。"
                                }

                            </div>
                        </div>
                    </div>

                    <div className="page">...</div>
                </div>
                <div className="panel-overlay"></div>
                <div className="panel panel-left panel-reveal">
                    <div className="content-block">
                        <p>这是一个侧栏</p>
                        <p></p>
                        <p><a href="#" className="close-panel">关闭</a></p>
                    </div>
                </div>

            </div>
        )
    }
}
function mapStateToProps(state) {
    //这里是将你store中的state也就是你ruducer中返回的数据映射到你的props中，这样你才能在上面中的props中拿到数据
    //所以在上面constructor中this.props.dt打印出来就是你的axios返回请求的数据dongtai[],fans[]，
    return ({
        dt: state
    })
}
function mapDispatchToprops(dispatch) {
    //这里的意思就是先将你的action中的函数映射到你当前页面的props中这样你才能在上面拿到this.props.fans()和this.props.fans()
    //一旦你上面写了this.props.fans()和this.props.fans()它就会触发下面的dispatch从而触发store中action中相应的函数，
    return bindActionCreators({ ...dongtai, ...fans}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToprops)(Dongtai)
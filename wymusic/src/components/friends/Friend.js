import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import '../../assets/css/friend.css';
import friendCreator from '../../store/actionCreator/friendCreator';
import loadingCreator from '../../store/actionCreator/loading';

class Friend extends Component {
    constructor(props) {
        super(props);     
        this.handlerScroll = this.handlerScroll.bind(this);
        this.state = {
            pageSize: 10
        }
    }

    handlerScroll(e) {
        let scrollTop = document.body.scrollTop;
        let scrollHeight = document.body.clientHeight;
        let clientHeight = this.refs.frInfo.clientHeight;
        
        if(clientHeight < (scrollHeight+scrollTop-150) && this.state.pageSize < this.props.event.length) {
            this.setState({
                pageSize: this.state.pageSize + 10
            }, () => {
                this.props.getFriends(this.props.lasttime, this.state.pageSize);
            })
        }
    }
    
    render(){
        return(
            <div id="friendWrap">
                <div className="frTop">
                    <i className="iconfont iconwodejiahao"></i>
                    <div className="frDongtai">
                        <span>动态</span>
                        <span>附近</span>
                    </div>
                    <i className="iconfont iconyinlebofangxuanlvjiezou"></i>
                </div>   
                
                <div className="frShipin">
                    <div>
                        <i className="iconfont icongengduo"></i>
                        <span>发动态</span>
                    </div>
                    <div>
                        <i className="iconfont iconshipin"></i>
                        <span>发布视频</span>
                    </div>
                </div>
            
                <div ref="frInfo" onScroll={this.handlerScroll}>
                    {
                        this.props.event.map((v, i) => {
                            return (
                                <div key={i} className="frInfoWrap">
                                    <div className="frInfoTop">
                                        <div className="frInfoTr">
                                            <div className="fravta">
                                                <img src={v.user.avatarUrl} alt="头像"/>
                                            </div>
                                            <div className="fruser">
                                                <span>{v.user.nickname}</span>
                                                <span>{v.user.followeds}粉丝</span>
                                            </div>
                                            <span></span>
                                        </div>
                                        <span className="frFocus">+ 关注</span>
                                    </div>

                                    <div className="frInfoCOntent">
                                        <span className="josnMsg">{JSON.parse(v.json).msg}</span>
                                        <div className="frInfoPicWrap" style={{display:v.pics.length?'display':'none'}}>
                                            {
                                                v.pics.map((item, i) => {
                                                    return (
                                                        <img src={item.squareUrl} alt="图片" key={i}/>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div className="frInfoBottom">
                                            <div>
                                                <i className="iconfont iconfenxiangzhuanfafasongzhijiantouyuanxingshar"></i>
                                                <span>{v.info.shareCount}</span>
                                            </div>
                                            <div>
                                                <i className="iconfont iconxiaoxi1"></i>
                                                <span>{v.info.commentCount}</span>
                                            </div>
                                            <div>
                                                <i className="iconfont icontuijian1"></i>
                                                <span>{v.info.likedCount}</span>
                                            </div>
                                            <i className="iconfont iconshudian"></i>
                                        </div>
                                    </div>
                                    
                                </div>
                            )
                        })
                    }
                </div>
                <div className="isLoading" style={{display:this.props.isLoading?'block':'none'}}>加载中....</div>
            </div>
        )
    }

    componentDidMount() {
        this.props.getFriends(this.props.lasttime);
        window.addEventListener("scroll", this.handlerScroll, true);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handlerScroll, true);
    }
}

function mapStateToProps({friend, loading}) {
    // console.log(11111, friend.events);
    return {
        event: friend.event,
        lasttime: friend.lasttime,
        isLoading: loading.isLoading
    }
}

export default connect(mapStateToProps, dispatch => bindActionCreators({
    ...friendCreator,
    ...loadingCreator
}, dispatch))(Friend)
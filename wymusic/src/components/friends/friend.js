import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import '../../assets/css/friend.css';
import friendCreator from '../../store/actionCreator/friendCreator';

class Friend extends Component {
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
            
                <div>
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

            </div>
        )
    }

    componentDidMount() {
        this.props.getFriends(this.props.lasttime);
    }
}

function mapStateToProps({friend}) {
    console.log(11111, friend.events);
    return {
        event: friend.events.event,
        lasttime: friend.events.lasttime
    }
}

export default connect(mapStateToProps, dispatch => bindActionCreators({
    ...friendCreator
}, dispatch))(Friend)
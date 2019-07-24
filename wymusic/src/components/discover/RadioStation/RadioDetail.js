import React from "react";
import "../../../assets/css/RadioStation/radioDetail.css"
import {connect} from 'react-redux'
import RradioStation from '../../../store/actionCreator/radioStation'
import {
    bindActionCreators
} from "redux"


class RadioDetail extends React.Component {
    constructor() {
        super();
        this.state = {
            cut: 1,
        };
        this.handScroll = this.handScroll.bind(this);
    }

    componentDidMount() {
        this.props.getDjRadioDetail(this.props.match.params.id);
        this.props.getDjRadioProgram(this.props.match.params.id);
        window.addEventListener('scroll', this.handScroll, true);
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.handScroll,true);
    }
    handScroll(e){
        let scrollTop = document.body.scrollTop;
        let clientHeight = this.refs.lala.clientHeight;
        let scrollHeight = document.body.clientHeight;
        if (clientHeight<scrollTop+scrollHeight-200 && this.props.limit<this.props.djProgram.count) { // 如果滚动到接近底部，自动加载下一页
            this.props.getDjRadioProgram(this.props.match.params.id,this.props.limit + 20,!this.props.asc)
        }
    }

    createTime(v) {
        var time = new Date(v);
        var timeStr = time.getMonth() + "-" +
            time.getDate().toString().padStart(2, "0") + " ";
        return timeStr;
    }

    playTimes() {
        var playTime = 0;
         this.props.djProgram.programs.map(v=>{
            if(v.mainSong.hMusic){
                playTime = v.mainSong.hMusic.playTime;
            }else if(v.mainSong.mMusic){
                playTime = v.mainSong.mMusic.playTime;
            }else if(v.mainSong.lMusic){
                playTime = v.mainSong.lMusic.playTime;
            }else if(v.mainSong.bMusic){
                playTime = v.mainSong.bMusic.playTime;
            }else {
                playTime = 2470514;
            }
            return playTime
        })
        var time = new Date(playTime);
        var timeStr = time.getMinutes().toString().padStart(2, "0") + ":" +
            time.getSeconds().toString().padStart(2, "0")
        return timeStr;
    }

    jiexi(content) {
        let lyrics = content.split("\n");
        let lrcObj = {};
        let list = [];
        lyrics.forEach((item, index) => {
            lrcObj[index] = item
        })
        for (let key in lrcObj) {
            let temp = {
                comment: ""
            };
            temp.comment = lrcObj[key];
            list.push(temp);
        }
        return list
    }

    handlerClick(cut) {
        this.setState({
            cut
        })
    }


    render() {
        return (
            <div className="radio-detail">
                <div className="radio-detail-banner"
                     style={{backgroundImage: 'url(' + this.props.djRadio.picUrl + ')'}}>
                    <div className="radio-detail-top">
                        <div className="radio-detail-icon">
                            <i className="iconfont iconfanhui" onClick={() => {
                                this.props.history.go(-1)
                            }}></i>
                            <span>电台</span>
                        </div>
                        <div className="radio-detail-icon">
                            <i className="iconfont iconfenxiang"></i>
                            <i className="iconfont iconshudian"></i>
                        </div>
                    </div>
                    <div className="radio-detail-info">
                        <div className="radio-detail-info-1">
                            <p>{this.props.djRadio.name}</p>
                            <p>{this.props.subCount}人已订阅</p>
                        </div>
                        <div className="radio-detail-dingyue">
                            <i className="iconfont icontuijian1"></i>
                            <span>订阅</span>
                        </div>
                    </div>
                </div>
                <div className="radio-detail-list" onScroll={this.handScroll}>
                    <div className="radio-detail-list-button">
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <button onClick={this.handlerClick.bind(this, 0)}>详情</button>
                            <div className={"button-div"}
                                 style={{display: this.state.cut === 0 ? "block" : "none"}}></div>
                        </div>
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <button onClick={this.handlerClick.bind(this, 1)}>节目
                                <span>{this.props.djProgram.count}</span>
                            </button>
                            <div className={"button-div"}
                                 style={{display: this.state.cut === 1 ? "block" : "none"}}></div>
                        </div>
                    </div>
                    <div style={{display: this.state.cut === 1 ? "block" : "none"}} className={"lala"} ref={"lala"}>
                        <div className={"radio-detail-jiemu-jieshao"}>
                            <div>
                                <span className={"jiemu-jieshao-1"}>共{this.props.djProgram.count}期</span>
                            </div>
                            <div style={{display: "flex"}}>
                                <div className={"jiemu-jieshao-right"} onClick={()=>{
                                    this.props.getDjRadioProgram(this.props.match.params.id,this.props.limit,this.props.asc)
                                }}>
                                    <i className={"iconfont iconjiantou"}></i>
                                    <span className={"jiemu-jieshao-2"}>排序</span>
                                </div>
                                <div>
                                    <i className={"iconfont iconduoxuan"}></i>
                                    <span className={"jiemu-jieshao-2"}>多选</span>
                                </div>
                            </div>
                        </div>
                        {
                            this.props.djProgram.programs.map((item, index) => {
                                return (
                                    <div key={index} className={"radio-detail-jiemu-div"} onClick={() => {
                                        this.props.history.push("/player/" + item.mainSong.id)
                                    }}>
                                        <div style={{display: "flex", alignItems: "center"}}>
                                            <p className={"seriaNum"}>{item.serialNum}</p>
                                            <div className={"marginleft"}>
                                                <div className={"name"}>
                                                    {item.name}
                                                </div>
                                                <div className={"shijian"}>
                                                    <p>{this.createTime(item.radio.createTime)}</p>
                                                    <p>
                                                        <i className={"iconfont iconbofang"}></i>
                                                        {item.listenerCount}
                                                    </p>
                                                    <p>
                                                        <i className={"iconfont iconshijian"}></i>
                                                        {this.playTimes()}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <i className={"iconfont iconshudian"}></i></div>
                                )
                            })
                        }
                        <div style={{display:this.props.isLoading?"block":"none"}} className={"jiazai"}>加载中......</div>
                    </div>
                    <div style={{display: this.state.cut === 0 ? "block" : "none"}} className={"hh"}>
                        <div className={"detail-all"}>
                            <div>
                                <p className={"detail-p"}>主播</p>
                                <div className={"detail-info"}>
                                    <div className={"radio-detail-touxiang"}>
                                        <img src={this.props.djRadio.dj.avatarUrl} alt=""/>
                                        <div className={"detail-geshou-name"}>
                                            <span>{this.props.djRadio.dj.nickname}</span>
                                            <span>{this.props.djRadio.dj.experts ? this.props.djRadio.dj.experts[1] : "网易音乐"}</span>
                                        </div>
                                    </div>
                                    <i className={"iconfont iconyou"}></i>
                                </div>
                            </div>
                            <div>
                                <div className={"jianjie"}>
                                    <p className={"detail-p"}>电台内容简介</p>
                                </div>
                                <div className={"fenlei"}>分类：
                                    <span className={"category"}>{this.props.djRadio.category}</span>
                                </div>
                                <div className={"zz"}>
                                    {this.props.djRadio.desc}
                                </div>
                            </div>
                            <div className={"pinglun"}>
                                <div>
                                    <p className={"detail-p"}>精彩评论</p>
                                </div>
                                <div>
                                    {
                                        this.props.djRadio.commentDatas.map((item, index) => {
                                            return (
                                                <div key={index}>
                                                    <div className={"pinglun-touxiang"}>
                                                        <img src={item.userProfile.avatarUrl} alt=""/>
                                                        <p>{item.userProfile.nickname}</p>
                                                    </div>
                                                    <div className={"pinglun-neirong"}>
                                                        {this.jiexi(item.content).map((v, i) => {
                                                            return (
                                                                <div key={i}>
                                                                    <p>{v.comment}</p>
                                                                </div>
                                                            )
                                                        })}
                                                        <span className={"neirong-foot"}>
                                                                <span>——</span>
                                                                <span>{item.programName}</span>
                                                                </span>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    let subCount = state.radioStation.djRadio.subCount;
    if (subCount > 10000) {
        subCount = parseInt(subCount / 10000) + "万"
    }
    return {
        djRadio: state.radioStation.djRadio,
        djProgram: state.radioStation.djProgram,
        subCount,
        limit: state.radioStation.limit,
        isLoading:state.radioStation.isLoading,
        asc:state.radioStation.asc
    }
}

export default connect(mapStateToProps, dispatch => bindActionCreators({
    ...RradioStation
}, dispatch))(RadioDetail);
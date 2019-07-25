import React from "react"
import { connect } from "react-redux"
import * as videoAction from "@/store/actionCreator/video"
import { bindActionCreators } from "redux"
import axios from "axios"
import "~/video-react/dist/video-react.css"
import "./mv.css"

class Mv extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoading: true,
            isLoading2: true
        }
    }
    render() {
        if (this.state.isLoading || this.state.isLoading2) {

            console.log(1122334455)
            return (
                <div>Loading...</div>
            )
        } else {
            return (
                <div className="mv-bag-box">
                    <div className="mv-box">
                        <div className="mv-container">
                            <div className="mv-title">
                                <h3>MV精选</h3>
                                <p onClick={this.getMoreMv.bind(this)}>更多MV</p>
                            </div>
                            <div className="mv-content-box">
                                {
                                    this.props.selectMvData.map(item => {
                                        return (
                                            <div key={item.id} className="mv-content" >
                                                <img onClick={this.playMv.bind(this, item)} src={item.picUrl} alt="" width="100%" />
                                                <h4>{item.name}</h4>
                                                {
                                                    item.artists.map((item2, index) => {
                                                        return (
                                                            <span key={item2.id}>{item.artists.length - 1 === index ? item2.name : item2.name + "/"}</span>
                                                        )
                                                    })
                                                }
                                                <div className="play-num">
                                                    <span>▷</span>
                                                    <span>{item.playCount > 10000 ? Math.round(item.playCount / 10000) + "万" : item.playCount}</span>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="mv-ranking" onClick={this.mvRanking.bind(this)}>
                        <p>排行榜 ></p>
                        <p>{`更新时间:${new Date().getMonth() + 1}月${new Date().getDate()}日`}</p>
                    </div>
                    <div className="mv-title mv-more-marvellous">
                        <h3>MV精选</h3>
                        <p onClick={this.getClassification.bind(this)}>MV分类</p>
                    </div>
                    <div>
                        {
                            this.props.morvellousMvData[0].data.mvs.map(item => {
                                return (
                                    <div key={item.id} className="more-marvellous-mv">
                                        <img  src={item.cover} alt="" />
                                        <p className="more-marvellous-name">{item.name}</p>
                                        <div className="more-marvellous-num">
                                            <span>▷</span>
                                            <span>{item.playCount > 10000 ? Math.round(item.playCount / 10000) + "万" : item.playCount}</span>
                                        </div>
                                        <div className="time-mv">{(item.duration/1000/60).toFixed(2)}</div>
                                        <div onClick={this.playMv.bind(this,item)} className="mv-sjx"></div>
                                    </div>
                                )
                            })

                        }
                        {
                            this.props.morvellousMvData[1].data.mvs.map(item => {
                                return (
                                    <div key={item.id} className="more-marvellous-mv">
                                        <img  src={item.cover} alt="" />
                                        <p className="more-marvellous-name">{item.name}</p>
                                        <div className="more-marvellous-num">
                                            <span>▷</span>
                                            <span>{item.playCount > 10000 ? Math.round(item.playCount / 10000) + "万" : item.playCount}</span>
                                        </div>
                                        <div className="time-mv">{(item.duration/1000/60).toFixed(2)}</div>
                                        <div onClick={this.playMv.bind(this,item)} className="mv-sjx"></div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            )
        }

    }

    async playMv(item) {
        const { data } = await axios.get("/wymusic/mv/url?id=" + item.id)
        var name = item.name
        var playCount = item.playCount > 10000 ? Math.round(item.playCount / 10000) + "万" : item.playCount
        this.props.history.push({
            pathname: "/playMy",
            state: {
                mvInfo: data.data,
                playCount,
                name
            }
        });
    }
    getMoreMv() {
        this.props.history.push({
            pathname: "/moreMv"
        })
    }
    componentDidMount() {
        if (this.props.selectMvData.length === 0) {
            this.props.getMvList().then(() => {
                this.setState({
                    isLoading: false
                })
            })
        } else {
            this.setState({
                isLoading: false
            })
        }
        if (this.props.morvellousMvData.length === 0) {
            this.props.getMarvellousMv().then(() => {
                this.setState({
                    isLoading2: false
                })
            })
        } else {
            this.setState({
                isLoading2: false
            })
        }
    }
    mvRanking() {
        this.props.history.push("/mvRanking")
    }
    getClassification(){
        this.props.history.push("/mvClassification")
    }
}
function mapStateToProps(state) {
    console.log(state)
    // console.log("state", state.selectMvData.mvSelectedList)
    return {
        selectMvData: state.selectMvData.mvSelectedList,
        morvellousMvData: state.morvellousMvData.marvellousMvList
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(videoAction, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Mv)
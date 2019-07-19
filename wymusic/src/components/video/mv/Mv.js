import React from "react"
import { connect } from "react-redux"
import { withRouter } from 'react-router-dom'
import * as videoAction from "@/store/actionCreator/video"
import { bindActionCreators } from "redux"
import axios from "axios"
import baseUrl from "@/baseUrl"
import "./mv.css"

class Mv extends React.Component {
    render() {
        return (
            <div>
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
                    <p>{`更新时间:${new Date().getMonth()+1}月${new Date().getDate()}日`}</p>
                </div>
            </div>
        )
    }
    async playMv(item) {
        const { data } = await axios.get(baseUrl + "/mv/url?id=" + item.id)
        var name = item.name
        var playCount = item.playCount > 10000 ? Math.round(item.playCount / 10000) + "万" : item.playCount
        // console.log(playCount)
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
            pathname: "/moreMv",
            state: {
                num: 2
            }
        })
    }
    componentWillMount() {
        if (this.props.selectMvData.length === 0) {
            this.props.getMvList()
        }
    }
    mvRanking(){
        this.props.history.push("/mvRanking")
    }
}
function mapStateToProps(state) {
    // console.log("state", state.selectMvData.mvSelectedList)
    return {
        selectMvData: state.selectMvData.mvSelectedList,
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(videoAction, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Mv)
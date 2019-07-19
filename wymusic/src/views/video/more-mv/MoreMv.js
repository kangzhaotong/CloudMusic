import React from 'react';
import { connect } from "react-redux"
import { Player } from "video-react"
import * as videoAction from "@/store/actionCreator/video"
import { bindActionCreators } from "redux"
import axios from "axios"
import baseUrl from "@/baseUrl"
import "~/video-react/dist/video-react.css"
import "./moreMv.css"
class PlayMv extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoading: false
        }
    }
    render() {
        if (!this.state.isLoading) {
            console.log("我也执行了")
            return (<div>Loading...</div>)
        } else {
            console.log("我执行了")
            const titleArr = ["网易", "内地", "港台", "欧美", "韩国", "日本"]
            const moreMvData = this.props.moreMvData
            return (
                <div className="more-mv-container">
                    <div className="more-nav">
                        <p><span onClick={this.goMv.bind(this)}>←</span>MV精选</p>
                    </div>
                    {
                        moreMvData.map((item, index) => {
                            return (
                                <div key={index} className="more-mv-box">
                                    <h4 className={index === 0 ? "wy" : null}>{titleArr[index]}</h4>
                                    <div className="more-mv-title">
                                        {
                                            item.data.data.map(item2 => {
                                                return (
                                                    <div key={item2.id} className="more-mv-content">
                                                        <img onClick={this.playMv.bind(this,item2)} src={item2.cover} alt="" />
                                                        <p>{item2.name}</p>
                                                        {
                                                            item2.artists.map((item3, index) => {
                                                                return (
                                                                    <span className="name" key={item3.id}>{item2.artists.length - 1 === index ? item3.name : item3.name + "/"}</span>
                                                                )
                                                            })
                                                        }
                                                        <div className="more-play-num">
                                                            <span>{item2.playCount > 10000 ? Math.round(item2.playCount / 10000) + "万" : item2.playCount}</span>
                                                        </div>
                                                        <div className="fmxx">
                                                            <p>{item2.briefDesc}</p>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
            )
        }

    }
    componentDidMount() {
        console.log(this.props.moreMvData.length)
        if (this.props.moreMvData.length === 0) {
            this.props.getMoreMv().then(() => {
                this.setState({
                    isLoading: true
                })
            })
        }else if(this.props.moreMvData.length){
            this.setState({
                isLoading: true
            })
        }
    }
    goMv() {
        this.props.history.go(-1)
    }
    async playMv(item) {
        const {data} = await axios.get(baseUrl + "/mv/url?id=" + item.id)
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
}
function mapStateToProps(state) {
    // console.log(state)
    return {
        moreMvData: state.moreMvData.moreMvList
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(videoAction, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(PlayMv)

import React from 'react';
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import axios from "axios"
import * as videoAction from "@/store/actionCreator/video"
import "./rankingMv.css"

class RankingMv extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoading: true,
            index: 0
        }
    }
    render() {
        if (this.state.isLoading) {
            return (
                <div>Loading...</div>
            )
        } else {
            const rankingMvList = this.props.rankingMvList
            const categoryList = ["内地", "港台", "欧美", "韩国", "日本"]
            return (
                <div className="ranking-mv-container">
                    <div className="ranking-title">
                        <p><span onClick={this.goMv.bind(this)}>←</span>MV排行榜</p>
                    </div>
                    <div className="ranking-nav">
                        <ul>
                            {
                                categoryList.map((item, index) => {
                                    return (
                                        <li key={index} onClick={this.changeIndex.bind(this, index)} className={index === this.state.index ? 'ranking-active' : null}>{item}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div>
                        <div className="mv-updata">
                            <p>{`更新时间:${new Date().getMonth() + 1}月${new Date().getDate()}日`}</p>
                        </div>
                        {
                            rankingMvList[this.state.index].data.data.map((item, index) => {
                                return (
                                    <div key={item.id} className="ranking-content">
                                        <img onClick={this.playMv.bind(this,item)} src={item.cover} alt="" />
                                        <p className="ranking-name">{item.name}</p>
                                        <div className="works-name">
                                            {
                                                item.artists.map((item2, index) => {
                                                    return (
                                                        <span  key={item2.id}>{item.artists.length - 1 === index ? item2.name : item2.name + "/"}</span>
                                                    )
                                                })
                                            }
                                        </div>
                                        <p className={'ranking-num' + (index === 0 || index === 1 || index === 2 ? ' ranking-num-active' : "")}>{item.lastRank}</p>
                                        <div className="ranking-play-num">
                                            <span>▷</span>
                                            <span>{item.playCount > 10000 ? Math.round(item.playCount / 10000) + "万" : item.playCount}</span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            )
        }
    }
    componentDidMount() {
        if (this.props.rankingMvList.length === 0) {
            // 方法是异步的，返回的是promise对象 在then中更改isLoading状态
            this.props.getRankingMv().then(() => {
                this.setState({
                    isLoading: false
                })
            })

        } else {
            this.setState({
                isLoading: false
            })
        }
    }
    goMv() {
        this.props.history.go(-1)
    }
    changeIndex(index) {
        this.setState({
            index
        })
    }
    async playMv(item) {
        const {data} = await axios.get("/wymusic/mv/url?id=" + item.id)
        var name = item.name
        var playCount = item.playCount > 10000 ? Math.round(item.playCount / 10000) + "万" : item.playCount
        // console.log(playCount)
        // this.props.history.push({
        //     pathname: "/playMy",
            // state: {
            //     mvInfo: data.data,
            //     playCount,
            //     name
            // }
        // });
        this.props.history.push("/playMy"+{state: {
            mvInfo: data.data,
            playCount,
            name
        }})
    }
}
function mapStateToProps(state) {
    // console.log(state)
    return {
        rankingMvList: state.rankingMvData.rankingMvList
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(videoAction, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(RankingMv)

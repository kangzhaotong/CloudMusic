import React from 'react';
import { connect } from "react-redux"
import { Player } from "video-react"
import * as videoAction from "@/store/actionCreator/video"
import { bindActionCreators } from "redux"
import axios from "axios"
import baseUrl from "@/baseUrl"
import "./classification-mv.css"
class ClassificationMv extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoading: false,
            num: 20,
            index1: 0,
            index2: 0,
            index3: 0,
            area: ["全部", "内地", "港台", "欧美", "日本", "韩国"],
            type: ["全部", "官方版", "原声", "现场版", "网易出品"],
            order: ["上升最快", "最热", "最新"],
            isLoading2: false
        }
        this.scrollTop = 0
        this.handleScroll = this.handleScroll.bind(this)
    }
    render() {

        if (!this.state.isLoading) {
            return (<div>Loading...</div>)
        } else {
            return (
                <div className="category-container">
                    <p className="mv-fl"><span onClick={this.goMv.bind(this)}>←</span>MV分类</p>
                    <div className="category-nav">
                        <div className="category-title">
                            <p>{`${this.state.area[this.state.index1]}.${this.state.type[this.state.index2]}.${this.state.order[this.state.index3]}`}</p>
                            <p onClick={this.addClassCategory.bind(this)}>筛选</p>
                        </div>
                        <div className="screen-mv-box cccc" ref="screen-mv-box">
                            <div className="screen-mv">
                                <div className="aa">
                                    <div className="category-xuanze-box">
                                        <p>地区:</p>
                                        <ul className="category-area flex">
                                            {
                                                this.state.area.map((item, index) => {
                                                    return (
                                                        <li onClick={this.changeCategory.bind(this, index)} className={index === this.state.index1 ? 'category-active' : ""} key={index}>{item}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                    <div className="category-xuanze-box">
                                        <p>类型:</p>
                                        <ul className="category-type flex">
                                            {
                                                this.state.type.map((item, index) => {
                                                    return (
                                                        <li onClick={this.changeCategory2.bind(this, index)} className={index === this.state.index2 ? 'category-active' : ""} key={index}>{item}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                    <div className="category-xuanze-box">
                                        <p>排序:</p>
                                        <ul className="category-order flex">
                                            {
                                                this.state.order.map((item, index) => {
                                                    return (
                                                        <li onClick={this.changeCategory3.bind(this, index)} className={index === this.state.index3 ? 'category-active' : ""} key={index}>{item}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div onClick={this.subCategory.bind(this)} className="category-btn">完成</div>
                        </div>

                    </div>

                    <div className="category-mv-box" ref="aaaa">
                        {
                            this.props.categoryMvData.map(item => {
                               
                                return (
                                    <div key={item.id} className="category-mv-content">
                                        <img onClick={this.playMv.bind(this,item)} src={item.cover} alt="" />
                                        <p>{item.name}</p>
                                        {
                                            item.artists.map((item2, index) => {
                                                return (
                                                    <span key={item2.id}>{item.artists.length - 1 === index ? item2.name : item2.name + "/"}</span>
                                                )
                                            })
                                        }
                                        <div className="category-num">
                                            <span>▷</span>
                                            <span>{item.playCount > 10000 ? Math.round(item.playCount / 10000) + "万" : item.playCount}</span>
                                        </div>
                                        <div className="time-mv-class">{(item.duration/1000/60).toFixed(2)}</div>                                        
                                    </div>
                                )
                            })
                        }
                        <div className="category-isLoading" style={{ display: this.state.isLoading ? 'block' : 'none' }}>加载中....</div>
                    </div>
                </div>
            )
        }
    }
    componentDidMount() {
        if (this.props.categoryMvData.length === 0) {
            this.props.getCategoryMv().then(() => {
                this.setState({
                    isLoading: true
                })
            })
        } else {
            this.setState({
                isLoading: true
            })
        }
    }
    componentWillMount() {
        window.addEventListener('scroll', this.handleScroll, true)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll, true)
    }
    goMv() {
        this.props.history.go(-1)
    }
    changeCategory(index) {
        this.setState({
            index1: index
        })
    }
    changeCategory2(index) {
        this.setState({
            index2: index
        })
    }
    changeCategory3(index) {
        this.setState({
            index3: index
        })
    }
    subCategory() {
        this.refs['screen-mv-box'].classList.add('cccc')
        this.props.getCategoryMv(this.state.area[this.state.index1], this.state.type[this.state.index2], 30, this.state.order[this.state.index3])

    }
    addClassCategory() {
        this.refs['screen-mv-box'].classList.remove('cccc')
    }
    handleScroll(e) {
        const scrollTop = document.body.scrollTop;
        const scrollHeight = document.body.clientHeight;
        // console.log(this.refs.aaaa)
        const clientHeight = this.refs.aaaa.clientHeight;
        if (clientHeight < (scrollHeight + scrollTop + 50)) {
            this.setState({
                num: this.state.num + 20
            })
            this.isLoading2 = true
            this.props.getCategoryMv(this.state.area[this.state.index1], this.state.type[this.state.index2], this.state.num, this.state.order[this.state.index3])
        }
    }
    async playMv(item) {
        console.log(item)
        const {data} = await axios.get(baseUrl + "/mv/url?id=" + item.id)
        var name = item.name
        var playCount = item.playCount > 10000 ? Math.round(item.playCount / 10000) + "万" : item.playCount
        this.props.history.push({
            pathname: "/playMy",
            state: {
                id:item.id,
                mvInfo: data.data,
                playCount,
                name
            }
        });
    }
}
function mapStateToProps(state) {
    return {
        categoryMvData: state.categoryMvData.categoryMvList
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(videoAction, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(ClassificationMv)

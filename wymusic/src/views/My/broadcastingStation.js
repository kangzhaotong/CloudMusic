import React, { Component } from 'react'
import './broadcastingStation.css'
import Header from '../../components/my/Collection/header'
import Commona from '../../components/my/broadcastingStation/index'
import { connect } from 'react-redux'
import actionCreate from '../../store/actionCreator/actionCreatormy'
class BroadcastingStation extends Component {
    constructor(props){
        super(props)
        // console.log(props)
        this.state={
            recommend_radio:[],
            collect_video:[],
            subscribe:[],
        }
    }
    componentDidMount(){
        this.props.recommend_radio()
        this.props.collect_video()
        this.props.subscribe()
    }
    componentWillReceiveProps(nextProps){
        // console.log(nextProps)
        this.setState({
            recommend_radio:nextProps.my.recommend_radio,
            collect_video:(nextProps.my.collect_video).slice(0,3),
            subscribe:nextProps.my.subscribe,
        },()=>{
            // console.log(this.state.recommend_radio)
            // console.log(this.state.collect_video)
        })
      
    }
    render() {
        return (
            <div>
                <Header {...this.props} teim="我的电台"></Header>
                <div className="myBroadcastingStation">
                    <h3>我创建的电台(0)</h3>

                    <div className="apply">
                        <span className="iconfont  iconhuatong1"></span>
                        <h4>申请做主播</h4>
                        <i className="iconfont iconyou"></i>
                    </div>
                    <div className="content">
                        <ul>
                        {
                            this.state.subscribe.map((v,i)=>{
                                return(
                                    <li key={i} onClick={()=>{
                                        this.props.history.push("/radio/radiodetail/"+v.id)
                                    }}>
                                    <img src={v.picUrl} alt=""/>
                                    <h5>{v.name}</h5>
                                    <p>{v.dj.nickname}</p>
                                    <p>{v.lastProgramName}</p>
                                    <span className="iconfont icon-shudian"></span>
                                </li>
                                )
                            })
                        }
                        </ul>
                    </div>
                </div>
                <Commona init={"语音直播"} recommend_radio={this.state.collect_video} ></Commona>
                
                <Commona init={"为你推荐"} recommend_radio={this.state.recommend_radio} name={1} ></Commona>
            </div>
        )
    }
}
let mapState = (state) => state;
let mapAction = (dispatch) => {
    return {
        recommend_radio() {
            dispatch(actionCreate.recommend_radio())
        },
        collect_video(){
            dispatch(actionCreate.collect_video())
        },
        subscribe(){
            dispatch(actionCreate.subscribe())
        }
    }
};
export default connect(mapState, mapAction)(BroadcastingStation)
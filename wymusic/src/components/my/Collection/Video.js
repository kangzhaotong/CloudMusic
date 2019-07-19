import React, { Component } from 'react'
import { connect } from 'react-redux'
import './video.css'
import actionCreate from '../../../store/actionCreator/actionCreatormy'
class Video extends Component {
    componentDidMount() {
        this.props.collect_video()
        console.log(this.props.my.collect_video)
    }
    render() {
        let collect_video = this.props.my.collect_video;
        return (
            <div className='collect_video'>
                <ul>
                    {
                        collect_video.map((v, i) => {
                            return (
                                <li key={i}>
                                    <div className="outer_img">
                                        <img src={v.coverUrl} alt="" />
                                        <i>▷{(v.durationms/10000).toFixed(1)+"万"}</i>
                                    </div>
                                    <h5>{v.title}</h5>
                                    <p> {(v.playTime/1000000).toFixed(2)}&ensp;{v.creator[0].userName}</p>
                                    <span className="iconfont icon-shudian"></span>
                                </li> 
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
let mapState = (state) => state;
let mapAction = (dispatch) => {
    return {
        collect_video() {
            dispatch(actionCreate.collect_video())
        }
    }
};
export default connect(mapState, mapAction)(Video)


import React, { Component } from 'react'
import './song.css'
import { connect } from 'react-redux'
import actionCreate from '../../../store/actionCreator/actionCreatormy'
class Song extends Component {
    constructor(props) {
        super(props)
        this.state = {
            recent_songs: []
        }
    }
    componentDidMount() {
        this.props.recent_songs(1428295281)
        console.log("数据的高----------------------",this.refs.onPullUp.clientHeight);
        console.log("滚动的高----------------------",document.documentElement.scrollTop);
        console.log("屏幕的高----------------------",document.documentElement.clientHeight);
    }  
    componentWillReceiveProps(nextProps) {
        // console.log(nextProps)
        this.setState({
            collect_album: nextProps.my.recent_songs
        }, () => {
            // console.log(this.state.collect_album)
        })
    }
    render() {
        return (
            <div className="song_top" ref="onPullUp">
                <div className="song_top_play">
                    <i className="iconfont iconbofang1"></i>
                    <h3>播放全部({this.props.my.recent_songs.length})</h3>
                    <i className="iconfont iconduoxuan"></i>
                    <span>多选</span>
                </div>
                <div className="song_top_song">
                    <ul>
                        {
                            this.props.my.recent_songs.map((v, i) => {
                                return (
                                    <li key={i} onClick={()=>{
                                        this.props.history.push("/player/"+v.song.id)
                                    }}>
                                        <div className="song_top_song_name">
                                            <span > {v.song.name}</span><br />
                                            <i>{v.song.ar[0].name}</i>
                                        </div>
                                        <div className="tubiao">
                                            
                                            <i className="iconfont iconshipin"></i>
                                            <i className="iconfont iconshudian"></i>
                                        </div>

                                    </li>
                                )
                            })
                        }

                    </ul>
                </div>
            </div>
        )
    }
}
let mapState = (state) => state;
let mapAction = (dispatch) => {
    return {
        recent_songs(id) {
            dispatch(actionCreate.recent_songs(id))
        },


    }
};
export default connect(mapState, mapAction)(Song)
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';
import playListCreator from '../../store/actionCreator/playListCreator';

class PlayListDetail extends Component {
    render() {
        return (
            <div>
                {this.props.playlistDetail.map(v => {
                    return (
                        <div key={v.id}>
                            <h3>{v.name}</h3>
                        </div>
                    )
                })}
            </div>
        )
    }

    componentDidMount() {
        console.log(this.props);
        if(this.props.match.params.id) {
            this.props.playListDetail(this.props.match.params.id);
        } else alert("获取歌单信息错误！！");
    }
}

function mapStateToProps(state) {
    return {
        playlistDetail: state.playList.playListDetail
    }
}

export default connect(mapStateToProps, dispatch => bindActionCreators({
    ...playListCreator
}, dispatch))(withRouter(PlayListDetail));
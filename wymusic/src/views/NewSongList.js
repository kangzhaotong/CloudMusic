import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';
import '../assets/css/playList.css';
import playListCreator from '../store/actionCreator/playListCreator';

class NewSongList extends Component {
    render() {
        return (
            <div>11111</div>
        )
    }

    componentDidMount() {
        // console.log(this.props);
        this.props.newSongList(this.props.match.params.songId);
    }
}

function mapStateToProps({playList}) {
    // console.log("22222222", playList.newSongList);
    return {
        newSongList: playList.newSongList
    }
}

export default connect(mapStateToProps, dispatch => bindActionCreators({
    ...playListCreator
}, dispatch))(withRouter(NewSongList));
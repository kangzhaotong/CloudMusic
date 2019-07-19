import React from 'react';
import { Player } from "video-react"
import "~/video-react/dist/video-react.css"
import "./playMv.css"
class PlayMv extends React.Component {
    render() {
        var data = this.props.location.state
        var url = data.mvInfo.url
        var playCount = data.playCount
        var name = data.name
        return (
            <div>
                <div>
                <Player autoPlay={true}>
                    <source src={url} />
                </Player>
                </div>
                <div className="mv-data">
                    <p>{name}</p>
                    <p>{playCount+'次观看'}</p>
                </div>
            </div>
        )
    }
}
export default PlayMv

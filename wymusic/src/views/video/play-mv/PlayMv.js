import React from 'react';
import { Player } from "video-react"
import "~/video-react/dist/video-react.css"
import "./playMv.css"
class PlayMv extends React.Component {
    render() {
        let data = this.props.location.state
        let url = data.mvInfo.url
        let playCount = data.playCount
        let name = data.name

        return (
            <div>
                <div className="sp-mv">
                    <Player autoPlay={true} ref={(player) => { this.player = player }}>
                        <source src={url} />
                    </Player>
                </div>
                <div className="mv-data">
                    <p>{name}</p>
                    <p>{playCount + '次观看'}</p>
                </div>
            </div>
        )


    }
}
export default PlayMv

import React,{ Component } from 'react';
import "../../assets/css/player.css"
import {connect} from 'react-redux'
import playCreator from '../../store/actionCreator/playerCreator'
import {
    bindActionCreators
} from "redux"


class Player extends Component{
    render(){
        return(
            <div id="tuijian">

                {/*每日推荐*/}
                <div className="tuijianc">

                        {
                            this.props.song.map((item,index) => {
                                return (<p className='content' key={index}>
                                    <audio  src={item.url} controls={'controls'} autoPlay={'autoPlay'}></audio>
                                </p>)
                            })
                        }



                </div>
            </div>
        )
    }

    componentDidMount() {
        this.props.getSongPlay(this.props.match.params.id);
    }
}
function mapStateToProps(state){
    return {
        song:state.player.song
    }
};
// function mapDispatchToProps(dispatch,getState) {
//     return bindActionCreators(playCreator,dispatch);
//     // console.log(getState)
//     // const songId = getState.match.params.id;
//     // return {
//     //     getSongPlay(songId){
//     //         dispatch(playCreator.getSongPlay(songId))
//     //     }
//     //
//     // }
// };
export default connect(mapStateToProps,dispatch=>bindActionCreators({
    ...playCreator
},dispatch))(Player);
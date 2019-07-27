// /personalized/privatecontent
import React from 'react';
import {connect} from 'react-redux';
import findVideoCreate from "../../store/actionCreators/video/findVideo";
import axios from "axios";

class FindVideo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            videoIdArr:[],
            videoUrlArr:[],
            videoDoms:[],
            num:-1,
        };
        this.findListCB=this.findListCB.bind(this)
    }
     findListCB(result){
         result.forEach((v,i)=>{
             if(v.videoId){
                 this.state.videoIdArr[i] = v.videoId
             }
         })
        let arr=[];
        this.state.videoIdArr.forEach((v,i)=>{
            axios.get('http://swmonk.top:3000/video/url?id='+v).then(({data})=>{
                arr[i]=data.urls[0].url;
                this.setState({
                    videoUrlArr:arr
                })
            })
        })
     }
    render(){
        return (
            <div style={{marginBottom: '40px'}}>
                {
                    this.props.findVideoList.map((v, i) => {
                        return (
                            <div key={i} style={{margin: '10px 0'}}>
                                <div style={{width: '100%'}}  ref={'video'} >
                                    <video src={this.state.videoUrlArr[i]} controls="controls" poster={v.picUrl} style={{width:'100%'}} onPlay={()=>{
                                        if(this.state.num>=0){
                                            this.state.videoDoms[this.state.num].pause();
                                        }
                                        this.setState({
                                            num:i
                                        })
                                    }}>
                                    </video>
                                </div>
                                <div style={{margin: '10px 0'}}>
                                    <div>{v.name}{i}</div>
                                </div>
                            </div>
                        )
                    })

                }
            </div>
        );
    }
    componentDidMount() {
        this.props.getFindVideo(this.findListCB);
    }

    componentWillUpdate(nextProps, nextState, nextContext){
        let videoDoms=document.getElementsByTagName("video");
        this.state.videoDoms=videoDoms;
        // console.log(videoDoms.length)
        // for(let i=0;i<videoDoms.length;i++){
        //     // videoDoms[i].pause();
        //     console.log(videoDoms[i].play)
        // }
    }
}
function mapStateToProps(state){
    return {
        findVideoList: state.video.findVideo.findVideoList
    }
}
function mapDispatchToProps(dispatch){
    return {
        getFindVideo(cb){
            // console.log(11111111,this);
            // console.log(this.refs.videoId);
            dispatch(findVideoCreate.getFindVideo(cb))
        }
    }
}




export default connect(mapStateToProps,mapDispatchToProps)(FindVideo);

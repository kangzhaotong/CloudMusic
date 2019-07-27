import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import songPlayCreate from '../../store/actionCreators/song/songPlay'
import Back from "../../components/common/Back";
class PlayPage extends React.Component{
    constructor(){
        super()
        this.state={
            isShow:true,
            lyricAll:[]
        }
    }
    //显示图片或歌词
    changeIsShow(){
        this.setState({
            isShow:!this.state.isShow,
            timer:null
        })
    }
    //分割歌词
    parseLyric(text) {
        let lyric = text.split('\n'); //先按行分割,每一行歌词分为一个元素
        let lrc = new Array(); //新建一个数组存放最后结果
        for (let i = 0; i < lyric.length; i++) {
            let d = lyric[i].match(/\[\d{2}:\d{2}((\.|\:)\d{1,4})\]/g);  //播放时间,
            let t = lyric[i].split(d); //以时间为分割点分割每行歌词，数组第二个为歌词正文
            if (d != null) { //过滤掉空行等非歌词正文部分
                var dt = String(d).split(':'); //不知道为什么一定要转换时间为字符串之后才能split，难道之前正则获取的时间已经不是字符串了么？
                var _t = Math.round(parseInt(dt[0].split('[')[1]) * 60 + parseInt(dt[1].split(']')[0]));
                lrc.push([_t, t[1]]);
            }
        }
        this.setState({
            lyricAll:lrc
        },function(){
            // console.log(lrc);
        })
    }
    //播放时间
    playTime(){
        //audio
        let lyricDiv = document.getElementById('play-page-lyric')
        //lyric
        let lyricList = document.querySelectorAll('.lyric-list');
        let lyricListBox = document.querySelector('.lyric-list-box');
        let arr = [];
        //每行歌词的时间整合到一个数组
        lyricList.forEach((v,i)=>{
            arr.push(v.innerHTML/1)
        })
        this.state.timer = setInterval(function(){
            let nowPlay = Math.floor(lyricDiv.currentTime);
            for(let i=0;i<arr.length;i++){
                if(nowPlay==arr[i]){
                    let top = parseInt(lyricListBox.style.top)
                    lyricListBox.style.top = (top-30)+'px' ;
                    break;
                }
            }
        },1000)
    }
    //暂停
    pauseTime(){
        clearTimeout(this.state.timer)
    }
    render(){
        return(
            <div style={{position:'relative',height:'100%'}}>
                <div style={{position:'relative',zIndex:1000,display:'flex',flexDirection:'column',justifyContent:'space-between',height:'100%',overflow:'hidden'}}>
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                        <Back></Back>
                        <div>{this.props.location.state.songName}</div>
                        <i className='iconfont'>&#xe660;</i>
                    </div>
                    <div style={{flex:1,display:'flex',justifyContent:'center',alignItems:'center',overflow:'auto',margin:'50px 30px',position:'relative'}} onClick={()=>this.changeIsShow.call(this)}>
                        {
                            this.state.isShow?(
                                <div style={{}} onClick={()=>this.props.getLyricById.call(this,this.props.songId)}>
                                    <img src={this.props.location.state.songImg} alt="" style={{height:'200px',width:'200px'}}/>
                                </div>
                            ):(
                                <div style={{height:'100%',width:'100%',position:'absolute',top:'240px',left:0}} className='lyric-list-box'>
                                    {
                                        this.state.lyricAll.map((v,i)=>{
                                            return(
                                                <div key={i} style={{width:'100%',height:'30px',color:'#000',fontSize:'16px'}}>
                                                    <p style={{float:'left'}}>{v[1]}</p>
                                                    <p className='lyric-list'  style={{float:'right'}}>{v[0]}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        }
                    </div>
                    <div style={{width:'100%'}}>
                        <div style={{}}>
                            <audio id='play-page-lyric' src={this.props.songUrl} controls={'controls'} onPlay={()=>this.playTime.call(this)} onPause={()=>this.pauseTime.call(this)} style={{width:'100%'}}></audio>
                        </div>
                    </div>
                </div>
                <div style={{position:'absolute',top:0,left:0,height:'100%'}}>
                    <img src={this.props.location.state.songImg} alt="" style={{filter:'blur(30px)',height:'100%'}}/>
                </div>
            </div>
        )
    }


    componentWillMount() {
        // console.log(this.props.location.state)
        this.props.getSongById(this.props.location.state.songId);
    }
    componentWillReceiveProps(nextProps, nextContext) {
        // console.log(333,nextProps.lyric)
        if(nextProps.lyric){
            this.parseLyric.call(this,nextProps.lyric)
        }
    }
}

function mapStateToProps(state){
    // console.log(333,state.song.changeLyricById.lyricData);
    return{
        songUrl:state.song.changeSongById.songData.data[0].url,
        songId:state.song.changeSongById.songData.data[0].id,
        lyric:state.song.changeLyricById.lyricData
    }
}
function mapDispatchToProps(dispatch){
    return{
        getSongById(songId){
            dispatch(songPlayCreate.getSongById(songId))
        },
        getLyricById(songId){
            // console.log(songId);
            dispatch(songPlayCreate.getLyricById(songId))
        }
    }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(PlayPage));
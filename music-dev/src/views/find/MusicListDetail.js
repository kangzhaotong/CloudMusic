import React from 'react';
import {withRouter} from "react-router-dom"
import {connect} from 'react-redux';
import musicListDetailCreate from '../../store/actionCreators/playlist/musicListDetail'
import Back from "../../components/common/Back";
import PlayBtn from "../../components/common/PlayBtn";
import TabBar from "../../components/common/TabBar";
class MusicListDetail extends React.Component{
    render(){
        return(
            <div style={{position:'relative'}}>
                <div style={{position:'relative',height:'',overflow:'hidden'}}>
                    <div style={{filter:'blur(30px)',position:'absolute',top:0,left:0}}>
                        <img src={this.props.musicListDetail.coverImgUrl} alt="" style={{height:'100%',width:'100%'}}/>
                    </div>
                    <div style={{zIndex:'1000',position:'relative'}}>
                        <div style={{height:'40px',lineHeight:'40px',display:'flex',justifyContent:'space-between',color:'#fff'}}>
                            <Back></Back>
                            <p>歌单</p>
                            <PlayBtn></PlayBtn>
                        </div>
                        <div style={{overflow:'hidden',margin:'10px 0'}}>
                            <div style={{position:'relative',float:'left',width:'40%',margin:'0 10px'}}>
                                <img src={this.props.musicListDetail.coverImgUrl} alt="" style={{height:'100%',width:'100%'}}/>
                                <i className='iconfont' style={{position:'absolute',top:0,right:'5px',color:'#fff'}}>&#xe640;{this.props.musicListDetail.playCount>100000?parseInt(this.props.musicListDetail.playCount/10000)+'万':this.props.musicListDetail.playCount}</i>
                            </div>
                            <div style={{float:'left',width:'50%'}}>
                                <p style={{color:'#fff',fontSize:'18px',marginBottom:'15px'}}>{this.props.musicListDetail.name}</p>
                                <div style={{lineHeight:'30px',color:'#fff'}}>
                                    <img src={this.props.musicListDetail.creator.avatarUrl} style={{height:'30px',width:'30px',borderRadius:'50%',float:'left',marginRight:'8px'}}/>
                                    <p style={{float:'left',marginRight:'8px'}}>{this.props.musicListDetail.creator.nickname}</p>
                                    <i className='iconfont left'>&#xe63b;</i>
                                </div>
                            </div>
                        </div>
                        <div className='music-list-detail-icon'>
                            <div>
                                <i className='iconfont'>&#xe7fa;</i>
                                <p>{this.props.musicListDetail.commentCount}</p>
                            </div>
                            <div>
                                <i className='iconfont'>&#xe660;</i>
                                <p>{this.props.musicListDetail.shareCount}</p>
                            </div>
                            <div>
                                <i className='iconfont'>&#xe660;</i>
                                <p>下载</p>
                            </div>
                            <div>
                                <i className='iconfont'>&#xe660;</i>
                                <p>多选</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{borderRadius:'15px 15px 0 0',background:'#fff',position:'relative',top:'-10px'}}>
                    <div className='music-list-detail-playAll'>
                        <div>
                            <i className='iconfont'>&#xe741;</i>
                            <p>播放全部</p>
                            <p> (共{this.props.musicListDetail.tracks.length}首)</p>
                        </div>
                        <div>
                            +收藏({this.props.musicListDetail.subscribedCount}人收藏)
                        </div>
                    </div>
                    <div>
                        {
                            this.props.musicListDetail.tracks.map((v,i)=>{
                                return(
                                    <div key={i} className='music-list-detail-list' onClick={()=>this.props.history.push({
                                        pathname:'/song/url',
                                        state:{
                                            songId:v.id,
                                            songName:v.name,
                                            songImg:v.al.picUrl
                                        }
                                    })}>
                                        <div style={{float:'left',width:'10%'}}>{i}</div>
                                        <div className='music-list-detail-inner'>
                                            <div>
                                                <div>
                                                    <p>{v.name}</p>
                                                    <p>{v.alia[0]}</p>
                                                </div>
                                                <div>
                                                    {v.ar[0].name}-{v.al.name}
                                                </div>
                                            </div>
                                            <div>
                                                <i className='iconfont'>&#xe656;</i>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <TabBar/>
            </div>
        )
    }
    componentWillMount() {
        //接收歌单id;   1，从歌单列表点击歌单，2，从主页的推荐歌单上点击歌单
        if(this.props.location.state.musicListId){
            this.props.getMusicListDetail(this.props.location.state.musicListId);
        }else if(this.props.location.state.id){
            this.props.getMusicListDetail(this.props.location.state.id)
        }
    }
}
function mapStateToProps(state){
    // console.log(22222,state.playlist.changeMusicListDetail.musicListDetail.tracks)
    return{
        //本个歌单详情的全部
        musicListDetail:state.playlist.changeMusicListDetail.musicListDetail
    }
}
function mapDispatchToProps(dispatch){
    return{
        getMusicListDetail(id){
            dispatch(musicListDetailCreate.getMusicListDetail(id))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(MusicListDetail));
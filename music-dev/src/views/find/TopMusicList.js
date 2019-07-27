import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom"
import Back from "../../components/common/Back";
import PlayBtn from "../../components/common/PlayBtn";
import topMusicListCreate from '../../store/actionCreators/playlist/topMusicList'
import TabBar from "../../components/common/TabBar";

class TopMusicList extends React.Component{
    render(){
        return (
            <div style={{background:"#fff"}}>
                <div className='Top-Music-Menu-top'>
                    <Back></Back>
                    <div style={{fontSize:'16px'}}>歌单</div>
                    <PlayBtn></PlayBtn>
                </div>
                <div style={{overflow:'hidden',position:'relative',height:'170px'}}>
                    <div className='Top-Music-Menu-filter'>
                        <img src="http://p1.music.126.net/3sQ6Aa-VVsnCs6nuNuzPGQ==/109951164196395050.jpg" alt=""/>
                    </div>
                    <div className='Top-Music-Menu-tit'>
                        <img src="http://p1.music.126.net/3sQ6Aa-VVsnCs6nuNuzPGQ==/109951164196395050.jpg" alt="" className='left' />
                        <div className='left'>
                            <div>精品歌单</div>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className='Top-Music-Menu-All' >
                    <div>全部歌单<i className='iconfont'>&#xe63b;</i></div>
                    <div>
                        <p>华语</p>
                        <p>民谣</p>
                        <p>摇滚</p>
                    </div>
                </div>
                <div>
                    <ul style={{overflow:'hidden'}}>
                        {
                            this.props.musicList.map((v,i)=>{
                                return(
                                    <li key={i} style={{float:'left',width:'50%',height:'250px'}} onClick={()=>{this.props.history.push({
                                        pathname:'/playlist/detail',
                                        state:{musicListId:v.id}
                                        })}
                                    }>
                                        <div style={{width:'90%',padding:'5%',position:'relative'}} >
                                            <img src={v.coverImgUrl} alt="" style={{width:'100%',height:'100%'}}/>
                                            <p style={{position:'absolute',bottom:'15px',left:'15px',color:'#fff',fontSize:'16px'}}><i className='iconfont'>&#xe658;</i>{v.creator.nickname}</p>
                                            <i className='iconfont' style={{position:'absolute',top:'10px',right:'10px',color:'#fff'}}>&#xe640;{
                                                v.playCount>100000?parseInt(v.playCount/10000)+'万':v.playCount
                                            }</i>
                                        </div>
                                        <p style={{lineHeight:'30px',marginLeft:'15px'}}>{v.name}</p>
                                    </li>
                                    )
                            })
                        }
                    </ul>
                </div>
                <div style={{height:'50px'}}/>
                <TabBar></TabBar>
            </div>
        );
    }
    componentWillMount() {
        this.props.getMusicList()
    }
}
function mapStateToProps(state){
    return {
        musicList:state.playlist.changeMusicList.musicList
    }
}
function mapDispatchToProps(dispatch){
    return{
        getMusicList(){
            dispatch(topMusicListCreate.getMusicList())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(TopMusicList));
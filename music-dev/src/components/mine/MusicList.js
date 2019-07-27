import React from 'react'
import {
    connect,
} from 'react-redux'
import {    bindActionCreators
} from 'redux'
import {addMLHandler} from './addMLHandler'
import {moreMLHandler} from './moreMLHandler';
import ListCom from './List'
import userCreators from "../../store/actionCreators/userCreator";
// musicList =JSON.parse(musicList);
//json文件直接使用，不用转化
// console.log(musicList)
class HigherCom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            add_ML: false,
            coll_ML: false,
            musicList: []
        }
    }

    show(atr) {
        this.setState({
            [atr]: !this.state[atr],
        })

    }



    render() {
        return (
            <div style={{marginTop: 10, marginBottom: 10}}>
                <div style={{background: 'white', height: '50px', position: 'relative', textAlign: 'left'}}>
                    <div onClick={(e) => {
                        this.show('add_ML');
                    }} style={{width: '70%'}}>
                        <i className={'iconfont icon-right'} style={{
                            transform: this.state.add_ML ? 'rotate(90deg)' : 'none',
                            display: 'inline-block',
                            margin: '15px'
                        }}/>
                        <span style={{margin: '10px'}}>创建的歌单</span>

                    </div>

                    <i className={'iconfont icon-increase'} style={{position: 'absolute', right: '50px', top: '15px'}}
                       onClick={addMLHandler}/>
                    <i className={'iconfont icon-moreif'}
                       style={{position: 'absolute', right: '20px', top: '15px', marginLeft: '20px'}}
                       onClick={moreMLHandler}/>
                </div>

                <div className={'child'}>
                    <ListCom arr={this.props.musicList.slice(0, 10)}
                             list_show={this.state.add_ML}
                             thumb_style={{width: '50px', height: '50px'}}
                             imgUrl={'coverImgUrl'}
                             title={'name'}
                             sub0={'trackCount'}
                    />
                </div>
                {/*收藏歌单*/}

                <div style={{background: 'white', height: '50px', position: 'relative', textAlign: 'left'}}>
                    <div onClick={(e) => {
                        this.show('coll_ML');
                    }} style={{width: '70%'}}>
                        <i className={'iconfont icon-right'}
                           style={{
                               transform: this.state.coll_ML ? 'rotate(90deg)' : 'none',
                               display: 'inline-block',
                               margin: '15px'
                           }}/>
                        <span style={{margin: '10px'}}>收藏歌单</span>

                    </div>

                    <i className={'iconfont icon-moreif'}
                       style={{position: 'absolute', right: '20px', top: '15px', marginLeft: '20px'}}
                       onClick={moreMLHandler}/>
                </div>

                <ListCom arr={this.props.musicList.slice(10)}
                         list_show={this.state.coll_ML}
                         thumb_style={{width: '50px', height: '50px'}}
                         imgUrl={'coverImgUrl'}
                />
            </div>
        )
    }

}
function mapStateToProps(state, props) {
    return {
        musicList:state.user.musicList,
        userInfo:state.user.userInfo
    }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({...userCreators},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HigherCom);

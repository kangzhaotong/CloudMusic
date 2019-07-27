import React from 'react';
import axios from 'axios'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
// ui
import { Toast, List } from 'antd-mobile';
//头部组件
import {headerHandler} from "../../components/mine/Header"
import LowCom from '../../components/mine/Header'
//tabs
import {Tabs,} from 'antd-mobile';
import ListCom from '../../components/mine/List'
import userCreator from "../../store/actionCreators/userCreator";
import VideoList from '../../views/video/page/VideoList';
const Item = List.Item;
const Brief = Item.Brief;
const Head = headerHandler({Ricon:'icon-icon-test2',text:'我的收藏',Licon:'icon-back'})(LowCom);
const tabs = [
    {title: '专辑'},
    {title: '歌手'},
    {title: '视频'},
    {title: '专栏'},
    {title: 'Mlog'},
];
class MyCollections extends React.Component {
    constructor(){
        super();
        this.state={
            singerList:[],
            album_sublist:[]
        }
    }
    render() {
        return (
            <div>
                <Head/>
                <Tabs
                    tabs={tabs}
                    initialPage={1}
                    animated={false}
                    useOnPan={false}
                    onChange={(tabdata, index) => {
                        console.log(tabdata, index)
                    }}
                    tabBarActiveTextColor={'red'}
                    tabBarUnderlineStyle={{border: '2px solid red'}}

                >
                    {
                        // 专辑列表
                            this.state.album_sublist.map((v, i) => {
                               return(
                                    <Item
                                    key={i}
                                    extra={<i className={'iconfont icon-moreif'} style={{marginTop:'20px',display:'inline-block'}}/>} 
                                    align="top" 
                                    thumb={<img src={this.state.album_sublist[i].picUrl} style={{width:'70px',height:'70px'}}/>}
                                    multipleLine>
                                    {this.state.album_sublist[i].name} 
                                    <Brief>
                                    {this.state.album_sublist[i].artists[0].name} 
                                    <span>{this.state.album_sublist[i].size}首</span>
                                    </Brief>
                            </Item>
                               )
                            })
                    }

                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#fff'
                    }}>
                        {/*content区域*/}

                        <ListCom arr={this.state.singerList.slice(0, 10)}
                                 sub0={'mvSize'}
                                 text1={'专辑:'}
                                 text2={'mv:'}
                        />

                    </div>
                    
                    <VideoList tabId={60101}/>
                    
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '250px',
                        backgroundColor: '#fff'
                    }}>
                        本地音乐请自行查看
                    </div>
                </Tabs>
            </div>
        )
    }
    componentWillMount() {
        // 获取专辑列表
        axios.get('/album/sublist').then(({data}) => {
            console.log(data)
            this.setState({
                album_sublist: data.data,
            })
        })

        // 获取歌手列表
        axios.get('/artist/sublist').then(({data}) => {
            this.setState({
                singerList: data.data,
            })
        })
    }

}
function mapStateToProps(state) {
    return{

    }
}

export default connect(mapStateToProps,()=>bindActionCreators(userCreator))(MyCollections)

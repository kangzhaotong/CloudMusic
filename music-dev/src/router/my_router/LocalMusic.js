import React from 'react';
import axios from 'axios';
import ListCom from '../../components/mine/List'
import {Tabs,} from 'antd-mobile';
//头部组件
import {headerHandler} from "../../components/mine/Header"
import LowCom from '../../components/mine/Header'

const Head = headerHandler({Ricon: 'icon-moreif', text: '本地音乐', Licon: 'icon-back', R_icon: 'icon-icon-test2'})(LowCom);
const tabs = [
    {title: '单曲'},
    {title: '歌手'},
    {title: '专辑'},
    {title: '文件夹'},
];

class LocalMusic extends React.Component {
    constructor() {
        super();
        this.state = {
            singerList: [],
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
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '250px',
                        backgroundColor: '#fff'
                    }}>
                        没有找到本地音乐哦
                    </div>

                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#fff'
                    }}>
                        {/*content区域*/}

                        <ListCom arr={this.state.singerList}/>

                    </div>

                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '250px',
                        backgroundColor: '#fff'
                    }}>
                        Content of third tab
                    </div>
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
        axios.get('/artist/sublist').then(({data}) => {
            this.setState({
                singerList: data.data,
            })
        })

    }
}

export default LocalMusic;
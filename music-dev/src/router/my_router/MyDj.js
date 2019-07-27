import React from 'react';
import axios from 'axios';
// ui
import { Toast, List } from 'antd-mobile';
import userCreators from '../../store/actionCreators/userCreator';
import { withRouter } from 'react-router-dom';
import {
    connect,
} from 'react-redux'
import {
    bindActionCreators
} from 'redux'
//头部组件
import { headerHandler } from "../../components/mine/Header"
import LowCom from '../../components/mine/Header'
const Head = headerHandler({ Ricon: 'icon-icon-test2', text: '视频', Licon: 'icon-back' })(LowCom);
const Item = List.Item;
const Brief = Item.Brief;
class MyDj extends React.Component {
    constructor() {
        super();
        this.state = {
            djCount: 0,
            dj_sublist: [],
            dj_sublist_count: 0,

        }
    }
    render() {
        return (
            <div>
                <Head />
                <div style={{ background: 'white', height: '50px', lineHeight: '50px', paddingLeft: '20px', borderTop: '1px solid #ccc' }}>
                    <span>我创建的电台</span>
                    <span style={{ paddingLeft: '10px' }}>{this.state.djCount}</span>
                </div>
                {
                    this.state.djCount === 0 ?
                        <List>
                            <Item
                                thumb={<i className={'iconfont icon-more'}/>}
                                arrow="horizontal"
                                onClick={() => { }}
                            >申请做主播
                        </Item>

                        </List>
                        :
                        null
                }
                <div style={{ background: 'white', height: '50px', lineHeight: '50px', paddingLeft: '20px' ,marginTop:'10px'}}>
                    <span>我订阅的电台 </span>
                    <span style={{ paddingLeft: '10px' }}>{this.state.dj_sublist_count}</span>
                </div>
                {
                    this.state.dj_sublist.map((v, i) => {
                       return(
                        <Item
                        key={i}
                        extra={<i className={'iconfont icon-moreif'} style={{marginTop:'20px',display:'inline-block'}}/>} 
                        align="top" 
                        thumb={<img src={this.state.dj_sublist[i].picUrl} style={{width:'70px',height:'70px'}}/>}
                        multipleLine>
                        {this.state.dj_sublist[i].name} 
                        <Brief>{this.state.dj_sublist[i].category} </Brief>
                        <Brief>{this.state.dj_sublist[i].lastProgramName}</Brief>
                    </Item>
                       )
                    })
                }
            </div>
        )
    }
    componentWillMount() {
        axios.get('/user/dj?uid=' + this.props.userInfo.userId).then(({ data }) => {
            console.log(data)
            if (data.code === 200)
                this.setState({
                    djCount: data.count
                })
        }).catch(() => {
            Toast('请登录', 1)
        })
        axios.get('/dj/sublist').then(({ data }) => {
            console.log(data);
            this.setState({
                dj_sublist: data.djRadios,
                dj_sublist_count: data.count
            })
        })
    }
}

function mapStateToProps(state, props) {
    return {
        userInfo: state.user.userInfo,
    }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ ...userCreators }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MyDj));

import React from 'react';
import {withRouter} from 'react-router-dom'
import {List} from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;

class ListCom extends React.Component {
    constructor(props) {
        super(props);
        let list_show;
        this.state = {
            Licon: '',
            RICON: '',
            R_icon: '',
            title: 'name',
            sub0: 'trackCount',
            sub1: '',
            text1: '',
            imgUrl: 'img1v1Url',
            list_show,
            thumb_style: {width: '50px', height: '50px', borderRadius: '50%'},
            ...this.props,
        }
    }


    componentWillReceiveProps(nextProps) {
        if (this.props.pathName === '/localMusic')
            return;
        this.setState({
            ...nextProps
        })
    }


    render() {
        return (
            <div style={{
                width: '100%',
                display: (this.state.list_show || this.state.list_show === undefined) ? 'block' : 'none'
            }}>
                {
                    this.props.arr.map((v, index) => {
                        return (
                            <List key={index} className="my-list">
                                <Item extra={(<i className={'iconfont icon-moreif'}/>)}
                                      thumb={(<img src={v[this.state.imgUrl]}
                                                   style={this.state.thumb_style}/>)}
                                      onClick={()=>{this.props.history.push({pathname:'/ml_detail/',state:{id:v.id}})}}
                                      multipleLine>

                                    {v[this.state.title]}
                                    <Brief>

                                        {
                                            (this.pathName === 'my') ? v[this.state.sub0]+'首' : ''
                                        }


                                        {/*歌手*/}
                                        {this.props.text1}
                                        {v.mvSize || ''}
                                        {this.state.text2}
                                        {v.albumSize}
                                    </Brief>
                                        <Brief>

                                            { v[this.state.sub1]}

                                        </Brief>

                                </Item>
                            </List>
                        )
                    })
                }
            </div>
        )
    }
    detail(id){

    }
}

export default withRouter(ListCom)

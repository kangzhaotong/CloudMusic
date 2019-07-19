import React, { Component } from 'react'
import './album.css'
import { connect } from 'react-redux'
import actionCreate from '../../../store/actionCreator/actionCreatormy'
import axios from 'axios';
import baseUrl from '../../../baseUrl';
class Album extends Component {
    constructor(props){
        super(props)
        this.state={
            index:1,
            collect_album:[]
        }
    }
    componentDidMount() {
        this.props.collect_album()
        this.props.recommend_content(this.state.index) 
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            collect_album:nextProps.my.album.collect_album
        },()=>{
           console.log(this.state.collect_album.length)
           if(this.state.collect_album.length==0){
            this.refs.btn.style.display="block"
        }else{
            this.refs.btn.style.display="none"
        }
        })
    }
    load_more(){
        this.setState({
            index:this.state.index++
        })
        this.props.recommend_content(this.state.index)
    }
    conceal(){
        console.log(this.refs.btn)
        this.refs.btn.style.display="none"
    }
    render() {
        //console.log(this.state.collect_album)
        //let collect_album = this.props.my.album.collect_album
       // let recommend_content = this.props.my.recommend_content
       
        return (
            <div className="album">
                {/* 数字专辑 */}
                <div className='figure_album'>
                    <img src={require("../../../assets/images/b1.gif")} alt="" />
                    <a>我的数字专辑</a>
                </div>
                {/* 收藏的专辑 */}
                <div className='collect_album'>
                    <h3>收藏的专辑                ({this.props.my.album.index})</h3>
                    <ul>
                        {this.state.collect_album.map((v, i) => {
                            return (
                                <li key={i}>
                                    <div className="outer_img">
                                        <img src={v.picUrl} alt="" />
                                    </div>
                                    <h5>{v.name}</h5>
                                    <p>{v.artists[0].name}       {v.size}首</p>
                                    <span className="iconfont icon-shudian"></span>
                                </li>
                            )
                        })}
                    </ul>

                </div>
                
                <div className="collect_album_recommend" ref='btn'>
                   
                    <h3>
                        <span>
                            <img src={require("../../../assets/images/22.gif")} alt="" srcset=""/>
                        </span>
                        为你推荐
                        <i onClick={this.conceal.bind(this)}>X</i>
                    </h3>
                    <div className="recommend_content">
                        <ul>
                            {
                                this.props.my.recommend_content.map((v,i) => {
                                    return(
                                        <li key={i}>
                                        <div className="outer_img">
                                            <img src={v.picUrl} alt="" />
                                        </div>
                                        <span>{v.name}</span>
                                        <p>{v.company}</p>
                                    </li> 
                                    )
                                   
                                })
                            }
                            {/* <li>
                                    <div className="outer_img">
                                        <img src="" alt=""/>
                                    </div>
                                    <span>王企鹅群</span>
                                    <p>驱蚊器翁</p>
                                </li> */}
                        </ul>
                    </div>
                            
                    <button className="load_more" onClick={this.load_more.bind(this)}>更多专辑</button>
                </div>
                                
            </div>
        )
    }
}
let mapState = (state) => state;
let mapAction = (dispatch) => {
    return {
        collect_album() {
            dispatch(actionCreate.collect_album())
        },
        recommend_content(i) {
            dispatch(actionCreate.recommend_content(i))
        }

    }
};
export default connect(mapState, mapAction)(Album)
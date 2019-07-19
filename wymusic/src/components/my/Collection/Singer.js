import React, { Component } from 'react'
import { connect } from 'react-redux'
import actionCreate from '../../../store/actionCreator/actionCreatormy'
import './singer.css'
class Singer extends Component {
    constructor(props){
        super(props)
        this.state={
            collect_singer:[],
            singer_recommend:[],

        }
    }
    componentDidMount(){
        console.log(this.props)
        this.props.collect_singer()
        this.props.singer_recommend()
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps)
        this.setState({
            singer_recommend:nextProps.my.singer_recommend,
            collect_singer:nextProps.my.singer.collect_singer
        },()=>{
            console.log(this.state.collect_singer.length)
            if(this.state.collect_singer.length===0){
               
                this.refs.btn.style.display="block"
            }else{
                this.refs.btn.style.display="none"
            }
        })
    }
    conceal(){
        this.refs.btn.style.display="none"
    }
    render() {
        // let singer_recommend = this.props.my.singer_recommend
        // let collect_singer = this.props.my.singer.collect_singer
        return (
            <div>
                <div className='collect_singer'>
                    <ul>
                    {this.state.collect_singer.map((v, i) => {
                                return (
                                    <li key={i}>
                                        <div className="outer_img">
                                            <img src={v.picUrl} alt=""/>
                                        </div>
                                        <h5>{v.name}</h5>
                                        <p>  专辑:{v.albumSize}   MV:{v.mvSize}</p>
                                        <span className="iconfont icon-shudian"></span>
                                    </li>
                                )
                            })}
                    </ul>
                </div>
                <div className="singer_recommend" ref='btn'>
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
                              this.state.singer_recommend.map((v,i)=>{
                                  return(
                                    <li key={i}>
                                        <img src={v.picUrl} alt=""/>  
                                        <p>{v.name}</p>
                                    </li>
                                  )
                              })  
                            }
                            {/* <li>
                                <img src="" alt=""/>  
                                <p>1111</p>
                            </li> */}
                        </ul>
                    </div>
                    <button className="load_more">更多专辑</button>
                </div>
            </div>
        )
    }
}
let mapState = (state) => state;
let mapAction = (dispatch) => {
    return {
        collect_singer() {
            dispatch(actionCreate.collect_singer())
        },
        singer_recommend(){
            dispatch(actionCreate.singer_recommend())
        }


    }
};
export default connect(mapState, mapAction)(Singer)
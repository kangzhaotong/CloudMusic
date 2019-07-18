import React,{ Component } from 'react';
import "../../assets/css/everyday.css"
import {connect} from 'react-redux'
import actionCreate from '../../store/actionCreator/index.js'
class Everyday extends Component{
    constructor(props){
        super(props);
        //关键就是这里，把要使用this的函数  在构造函数中用bind方法传入this
        this.back = this.back.bind(this);
        // this.run = this.run.bind(this);

    }
    back(){
        this.props.history.go(-1);
    }
    render(){
        let tuijian=this.props.discover.tuijian;
        return(
            <div id="tuijian">
                <div className="head">
                    <p>
                        <i className="iconfont iconarrow-right" onClick={this.back}></i>
                        <i className="iconfont iconwenhao"></i>
                        <i className="iconfont iconyinlebofangxuanlvjiezou"></i>
                    </p>
                    <div>
                        <p>根据你的音乐口味，为你推荐好朋友、好音乐</p>
                        <img src={require("../../assets/images/6.jpg")} alt=""/>
                        <i className="iconfont icon-arrow-right1"></i>

                    </div>
                </div>
                {/*每日推荐*/}

                <div className="tuijianc">
                    <i className="iconfont icon-bofang1"></i>
                    <p>播放全部</p>
                    <p>
                        <i className="iconfont icon-duoxuan"></i>
                        <span>多选</span>
                    </p> <br />
                    <div>
                        {
                            tuijian.map( (item,index) => {
                                return (<p className='content' key={index} onClick={()=>{
                                    this.props.history.push("/player/"+item.id)
                                }}>
                                    <img width={'60px'} key={index}  src={item.song.album.blurPicUrl}  alt="完美"/>
                                    <span>{item.song.name}</span>
                                    <span>{item.song.artists[0].name}</span>
                                    <i className="iconfont icon-bofang"></i>
                                    <i className="iconfont icon-shudian"></i>
                                </p>)
                            })
                        }

                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        console.log(this.props);
        this.props.getTuijian();
    }

}
let mapState=(state)=>state;
let mapAction=(dispatch)=>{
    return {
        getTuijian(){
            dispatch(actionCreate.getTuijian())
        }

    }
};
export default connect(mapState,mapAction)(Everyday);
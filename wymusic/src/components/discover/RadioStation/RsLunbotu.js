import React,{Component} from "react";
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css'
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import radioCreator from '../../../store/actionCreator/radioStation'; 


class RsLunbotu extends Component{
    render(){
        return (
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {
                        this.props.rsBannerList.map((v,i)=>{
                            return (
                                <div className="swiper-slide" key={i}>
                                    <img  src={v.imageUrl} alt=""></img>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="swiper-pagination"></div>
            </div>
        )
    }
    componentDidUpdate(){
        new Swiper ('.swiper-container', {
            // direction: 'horizontal', // 垂直切换选项horizontal
            loop: true, // 循环模式选项
            observer:true,
            autoplay: {   //滑动后继续播放（不写官方默认暂停）
                disableOnInteraction: false
            },
            // 如果需要分页器
            pagination: {
               el: '.swiper-pagination',
            },
        })        
    }
    componentDidMount(){
        // this.lunbotu();
        this.props.getRsBannerList()
    }
}
function mapStateToProps(state){
    return{
        rsBannerList:state.radioStation.rsBannerList,
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators(radioCreator,dispatch) 
}
export default connect(mapStateToProps,mapDispatchToProps)(RsLunbotu);
import React,{Component} from "react";
import Swiper from 'swiper';
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
                                    <img  src={v.imageUrl}></img>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="swiper-pagination"></div>
            </div>
        )
    }
    lunbotu(){
        var mySwiper11 = new Swiper ('.swiper-container', {
            direction: 'horizontal', // 垂直切换选项horizontal
            loop: true, // 循环模式选项
            observer:true,
            observeParents:true,  
            paginationClickable :true,
            centeredSlides: true,
            autoplay: 3000,
            autoplayDisableOnInteraction: false,
        
            // 如果需要分页器
            pagination: {
               el: '.swiper-pagination',
            },
            autoplay:{
                stopOnLastSlide: true
            },    
        })        
    }
    componentDidMount(){
        this.lunbotu();
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
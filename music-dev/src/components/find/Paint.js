import React,{Component} from "react";
import { Carousel, WingBlank } from 'antd-mobile';
import axios from 'axios';
//轮播1
class Paint extends Component {
    constructor(){
        super()
        this.state = {
            imgHeight: 125,
            bannerList:[]
        }
    }
    getBannerList(type=1){
        axios.get("http://swmonk.top:3000/banner?type="+type)
            .then(({data})=>{
                const banners = data.banners;
                this.state.bannerList = [];
                this.setState({
                    bannerList:this.state.bannerList.concat(banners)
                })
            })
    }
    handleClick(e){
        // window.event? window.e.eventcancelBubble = true : e.stopPropagation();
    }
    render() {
        return (
            <WingBlank onClick={(e)=>this.handleClick(e)}>
                <Carousel
                    autoplay={true}
                    infinite={true}
                >
                    {this.state.bannerList.map(val => (
                        <a
                            key={val}
                            href="http://www.baidu.com"
                            style={{ display: 'inline-block', width: '100%',  }}
                        >
                            <img
                                src={val.pic}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </a>
                    ))}
                </Carousel>
            </WingBlank>
        );
    }
    componentWillMount() {
        this.getBannerList.bind(this)();
    }
}
export default Paint;
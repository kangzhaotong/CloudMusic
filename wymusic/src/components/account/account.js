import React,{Component} from 'react';
import "../../assets/css/account.css"
class Card extends Component{
    render(){
        return(
        <div id="account">
            <div className="header">
                <i className="iconfont iconsaoyisaoerweimasaomasaomiao" style={{color:'#000001',fontSize:'28px'}}></i>
                <i className="iconfont iconyinlebofangxuanlvjiezou" style={{color:'#000001',fontSize:'25px'}}></i>
            </div>
            <div className="banner">
                <img src={require("../../assets/images/banner_1.jpg")} alt="" />
                <img src={require("../../assets/images/banner_2.jpg")} alt="" />
                <img src={require("../../assets/images/banner_3.jpg")} alt="" />
                <img src={require("../../assets/images/banner_4.jpg")} alt="" />
            </div>
            <div className="nav2">
                <p>
                    <span>0</span>
                    <span>动态</span>
                </p>
                <p>
                    <span>3</span>
                    <span>关注</span>
                </p>
                <p>
                    <span>0</span>
                    <span>粉丝</span>
                </p>
                <p>
                    <span className="iconfont icon-bianji"></span>
                    <span>编辑资料</span>
                </p>
            </div>
            <div className="img">
                <img src={require("../../assets/images/img.jpg")} alt="" />
            </div>
            <div className="assage">
                <p>
                    <i className="iconfont iconxiaoxi"></i>
                    <span>消息</span>
                </p>
                <p>
                    <img src={require("../../assets/images/assage.jpg")} alt="" />
                    <span>商城</span>
                    <span>JBL 68元抢</span>
                </p>
                <p>
                    <i className="iconfont iconyanchu"></i>
                    <span>演出</span>
                    <span>刘润琦巡演</span>
                </p>
                <p>
                    <i className="iconfont iconpifu3"></i>
                    <span>个性换肤</span>
                </p>
            </div>
            <div className="main1">
                <p>
                    <i className="iconfont iconlingsheng"></i>
                    <span>
                        口袋铃声
                        <i className="iconfont iconyou"></i>
                    </span>
                </p>
                <p>
                    <i className="iconfont iconicon-"></i>
                    <span>
                        我的订单
                        <i className="iconfont iconyou"></i>
                    </span>
                </p>
            </div>
            <div className="main2">
                <p>
                    <i className="iconfont iconshezhi"></i>
                    <span>
                        设置
                        <i className="iconfont iconyou"></i>
                    </span>
                </p>
                <p>
                    <i className="iconfont iconyejian"></i>
                    <span>
                        夜间模式
                        <i className="iconfont iconyou"></i>
                    </span>
                </p>
                <p>
                    <i className="iconfont icondingshiguanbi"></i>
                    <span>
                        定时关机
                        <i className="iconfont iconyou"></i>
                    </span>
                </p>
                <p>
                    <i className="iconfont iconclock"></i>
                    <span>
                        音乐闹钟
                        <i className="iconfont iconyou"></i>
                    </span>
                </p>
            </div>
            <div className="main3">
                <p>
                    <i className="iconfont iconzaixiantinggemianliuliang"></i>
                    <span>
                        在线听歌免流量
                        <i className="iconfont iconyou"></i>
                    </span>
                </p>
                <p>
                <i className="iconfont iconyouhuiquan"></i>
                    <span>
                        优惠券
                        <i className="iconfont iconyou"></i>
                        </span>
                </p>
            </div>
            <div className="main4">
                <p>
                    <i className="iconfont icondiantai"></i>
                    <span>
                        加入网易音乐人
                        <i className="iconfont iconyou"></i>
                    </span>
                </p>
                <p>
                    <i className="iconfont iconhuatong2"></i>
                    <span>
                        我要直播
                        <i className="iconfont iconyou"></i>
                    </span>
                </p>
                <p>
                    <i className="iconfont iconfenxiangzhuanfafasongzhijiantouyuanxingshar"></i>
                    <span>
                        分享网易云音乐
                        <i className="iconfont iconyou"></i>
                    </span>
                </p>
                <p>
                    <i className="iconfont iconguanyu"></i>
                    <span>
                        关于
                        <i className="iconfont iconyou"></i>
                    </span>
                </p>
            </div>
            <div className="exit">
                <input type="button" value="退出登录"></input>
            </div>
        </div>
        )
    }
}
export default Card;
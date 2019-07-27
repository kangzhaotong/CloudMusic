import React from "react";
import {List, WhiteSpace} from 'antd-mobile';
const Item=List.Item;
const Brief =Item.Brief;


class Nearby extends React.Component {
    constructor(prop){
        super(prop);
        this.state={
            dataList:[
                {portrait:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=542172031,1958995614&fm=26&gp=0.jpg',name:'照猫画虎',distance:'0.01',sex:1,sing:'「总有一天你会出现在我身边」-棱静',time:'7月8日'},
                {portrait:'http://p1.music.126.net/cWnROhrQl_DtY0Q9FBeMSA==/109951164209670331.jpg?param=45y45',name:'不知道你是谁',distance:'0.21',sex:1,sing:'「闺蜜」-许嵩',time:'7月10日'},
                {portrait:'https://p1.music.126.net/xBL4zgOV6RRKLkns3sMXeg==/109951164189473549.jpg?param=110y110&quality=100',name:'今天就不起床',distance:'0.37',sex:1,sing:'「一曲相思」-半阳',time:'7月9日'},
                {portrait:'https://p2.music.126.net/tRIB_-IlNp7Zt0kGK1Nq6g==/109951163832805654.jpg?param=224y224&quality=100',name:'陈小雨',distance:'0.66',sex:2,sing:'「我最亲爱的」-张惠妹',time:'7月11日'},
                {portrait:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=542172031,1958995614&fm=26&gp=0.jpg',name:'照猫画虎',distance:'0.01',sex:1,sing:'「总有一天你会出现在我身边」-棱静',time:'7月8日'},
                {portrait:'http://p1.music.126.net/cWnROhrQl_DtY0Q9FBeMSA==/109951164209670331.jpg?param=45y45',name:'不知道你是谁',distance:'0.21',sex:1,sing:'「闺蜜」-许嵩',time:'7月10日'},
                {portrait:'https://p1.music.126.net/xBL4zgOV6RRKLkns3sMXeg==/109951164189473549.jpg?param=110y110&quality=100',name:'今天就不起床',distance:'0.37',sex:1,sing:'「一曲相思」-半阳',time:'7月9日'},
                {portrait:'https://p2.music.126.net/tRIB_-IlNp7Zt0kGK1Nq6g==/109951163832805654.jpg?param=224y224&quality=100',name:'陈小雨',distance:'0.66',sex:2,sing:'「我最亲爱的」-张惠妹',time:'7月11日'},
            ]
        }
    }
    render() {
        return (
            <div>
                {this.state.dataList.map((v,i)=>{
                    return (
                        <div key={i}>
                            <WhiteSpace size={'md'}/>
                            <Item
                                thumb={
                                    (<div >
                                        <img style={{width:'40px',height:'40px'}} src={v.portrait} alt={''}/>
                                    </div>)
                                }
                                multipleLine
                                extra={(
                                    <div style={{color:'#888',width:'70px',float:'right',paddingRight:'10px '}}>
                                        <i className={'iconfont icon-position'}>{v.distance}</i>
                                    </div>
                                )}
                                onClick={() => {}}
                            >
                                {v.name} <Brief><i className={'iconfont '+((v.sex===1)?'icon-man':'icon-guke-girl')} style={{color:(v.sex===1)?'#21d8ff':'red'}}/></Brief>
                            </Item>
                            <div style={{background:'white'}}>
                                <div style={{borderTop:'1px solid',borderColor:'rgba(17,17,17,0.09)',margin:'0 20px',padding:'5px 10px 10px'}}>
                                    <span style={{display:'inline-block'}}>最近听：{v.sing}</span><span style={{display:'inline-block',float:'right'}}>{v.time}</span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Nearby;


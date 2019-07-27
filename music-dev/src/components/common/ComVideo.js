import React from 'react';


/* playStatus
0   占位图
1   视频初始化
2   视频播放
3   视频暂停
4   视频结束
 */

class ComVideo extends React.Component{
    constructor(props){
        super(props);
        this.play=this.play.bind(this);
        this.state={
            id:'id'+Math.ceil(Math.random()*10000),
            style:{
                width:'100%',
                boxSizing:'border-box'
            },
            // coverImgUrl:'https://p2.music.126.net/D6tQMPNLw0I2cTlYVCqDNA==/109951163574333736.jpg',
            // videoSrc:'http://vodkgeyttp9.vod.126.net/vodkgeyttp8/hmSVyBvl_2204539479_shd.mp4?wsSecret=440d9d1bced14d245370f2369178a55b&wsTime=1563263995&ext=tithYvd%2FfesIZe2adCthNu7aCGXWQDExkhQl3Uf98cRwh%2BE64BnYFPJKCSRp6Bq%2FOd4F%2FVq8Mcg9tZFXPePxBI2tR1F0V1SkB09M5if0vXCPdpljmJJUJiLga2U%2FQCXE0I6A89t6KxEW6%2BH2lEBiEsgCVYO2jSSxT24x3EZqadSAm4eu%2B09UeK1u8HSJr%2F8K3t6NiIAyPEiuVu6uD4rM1FiBOGob7ikbbuEpQK6HlziVYHH0Qb22DZh5ccIUTfob',
            playStatus:0,
            centerEl:(<i/>),
            ltEl:(<i/>) ,
            rtEl:(<i/>),
            lbEl:(<i/>),
            rbEl:(<i/>),
            distanceBorder:'10px',
            color:'white'
        }
    }
    componentWillMount() {
        this.setState({
            ...this.props
        })
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            videoSrc:nextProps.videoSrc
        })
    }

    componentDidMount() {
        this.ComVideoDom=document.querySelector('#'+this.state.id);
        this.ComVideoDom.playStatus=0;
    }

    play(){
        this.setState({
            playStatus:2,
        });
        this.ComVideoDom.playStatus=2;
        let allComVideoDom =document.getElementsByClassName('ComVideo');
        Array.from(allComVideoDom).forEach((v)=>{
           if ( v.playStatus===2&&v.id!==this.ComVideoDom.id){
               v.pause();
           }
        });
        this.ComVideoDom.play();
    }

    render() {
        return(
            <div>
                <div style={{display:this.state.playStatus===0?'block':"none",position:"relative",color:this.state.color}} onClick={()=>{
                    this.play()
                }}>
                    <img style={this.state.style} src={this.state.coverImgUrl} alt={''}/>
                    <div style={{position:"absolute",left:this.state.distanceBorder,top:this.state.distanceBorder}}>{this.state.ltEl}</div>
                    <div style={{position:"absolute",right:this.state.distanceBorder,top:this.state.distanceBorder}}>{this.state.rtEl}</div>
                    <div style={{position:"absolute",left:this.state.distanceBorder,bottom:this.state.distanceBorder}}>{this.state.lbEl}</div>
                    <div style={{position:"absolute",right:this.state.distanceBorder,bottom:this.state.distanceBorder}}>{this.state.rbEl}</div>
                    <div style={{position:"absolute",left:'50%',bottom:'50%'}}>{this.state.centerEl}</div>
                </div>
                <div style={{display:this.state.playStatus===0?'none':'block'}}>
                    <video style={this.state.style} controls src={this.state.videoSrc} id={this.state.id} className={'ComVideo'} onPlay={this.play} />
                </div>
            </div>
        )
    }
}

export default ComVideo
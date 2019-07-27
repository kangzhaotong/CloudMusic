import React from 'react';
import { Flex} from 'antd-mobile';
import {withRouter} from 'react-router-dom'

export function headerHandler(obj){
    return function (LowCom) {
        return class HighCom extends React.Component{
            render(){
                return(
                    <div style={{background:'white'}}>
                        <LowCom {...obj}></LowCom>
                    </div>
                )
            }
        }
    }
}

 class LowCom extends React.Component{
    LCHandler(e){
        if(e.target.className ==='iconfont icon-back'){
            this.props.history.go(-1)
        }
    }
    render(){
        return(
            <div style={{height:'50px',lineHeight:'50px'}}>
                <Flex>
                    <Flex.Item >
                        <i className={'iconfont '+this.props.Licon } style={{float:'left',marginLeft:'20px',fontSize:'25px'}} onClick={(e)=>{this.LCHandler(e)}}/>
                    </Flex.Item>

                    <Flex.Item style={{textAlign:'center'}}>
                        <span style={{fontSize:'20px'}}>{this.props.text}</span>
                    </Flex.Item>


                    <Flex.Item>
                        <i className={'iconfont '+this.props.Ricon } style={{float:'right',marginRight:'15px',fontSize:'25px'}}/>
                        {
                            this.props.R_icon?
                                <i className={'iconfont '+this.props.R_icon } style={{float:'right',fontSize:'25px',marginRight:'15px'}}/>
                                : ""
                        }
                    </Flex.Item>
                </Flex>
            </div>
        )
    }
}
export default withRouter(LowCom)
import { NavBar } from 'antd-mobile';
import React from 'react';

class ComMainNavBar extends React.Component{

    render() {
        return(
            <div>
                <NavBar
                    mode="light"
                    leftContent={<i className={'iconfont icon-audio'} style={{color:'black'}}/>}
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={<i className={'iconfont icon-icranking'} style={{color:'black'}}/>}
                ><i style={{color:'black'}}>网易云音乐</i></NavBar>
            </div>
        )
    }
}

export  default ComMainNavBar
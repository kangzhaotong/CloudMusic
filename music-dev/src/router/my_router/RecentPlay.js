import axios from 'axios';
import React from 'react';
//头部组件
import {headerHandler} from "../../components/mine/Header"
import LowCom from '../../components/mine/Header'
const Head = headerHandler({Ricon:'icon-icon-test2',text:'视频',Licon:'icon-back'})(LowCom);
class RecentPlay extends React.Component {
    render() {
        return (
            <div>
                <Head/>
                本地音月
            </div>
        )
    }
}

export default RecentPlay

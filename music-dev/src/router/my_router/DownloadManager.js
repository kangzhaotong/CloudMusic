import React from 'react';
//头部组件
import {headerHandler} from "../../components/mine/Header"
import LowCom from '../../components/mine/Header'
const Head = headerHandler({Ricon:'icon-icon-test2',text:'下载管理',Licon:'icon-back'})(LowCom);
class DownLoadManager extends React.Component {
    render() {
         return(
            <div>
                <Head/>
                下载管理
            </div>
        )
    }
}

export default DownLoadManager;
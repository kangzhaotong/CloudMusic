import React from "react";
import ComMainNavBar from '../../components/common/ComMainNavBar'
import { Tabs } from 'antd-mobile';
import VideoList from './page/VideoList'
import TabBar from "../../components/common/TabBar";

class VideoMain extends React.Component {
    constructor(prop){
        super(prop);
        this.state={
            tabs :[
                // { title: '儿歌',id:75100},
                // { title: '粤语',id:57105},
                // { title: '华语' ,id:59101},
                { title: '欧美',id:57106},
                { title: '韩语',id:57107 },
                { title: '日语',id:60101},
                // { title: '流行',id:57108},
                // { title: '民谣',id:57109 },
                // { title: '街头',id:59106},
                // { title: '最新',id:59107 }
            ]
        }
    }
    render() {
        return (
            <div>
                <ComMainNavBar/>
                <div>
                    <Tabs tabs={this.state.tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={5} />}>
                        {this.state.tabs.map((v)=>{
                            return (
                                <VideoList key={v.id} tabId={v.id} />
                            )
                        })}
                    </Tabs>
                </div>
                <TabBar/>
            </div>
        )
    }
}

export default VideoMain
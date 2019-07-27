import React from "react";
import ComMainNavBar from '../../components/ComMainNavBar'
import { Tabs } from 'antd-mobile';
import Dynamics from "./page/Dynamics";
import Nearby from "./page/Nearby";
import TabBar from "../../components/common/TabBar";

class FriendMain extends React.Component {
    tabs = [
        { title: '动态'},
        { title: '附近'},
    ];
    render() {
        return (
            <div>
                <ComMainNavBar/>
                <div>
                    <Tabs tabs={this.tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={5} />}>
                        <Dynamics/>
                        <Nearby/>
                    </Tabs>
                </div>
                <TabBar/>
            </div>
        )
    }
}

export default FriendMain;
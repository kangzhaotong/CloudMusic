import { Tabs, Badge } from 'antd-mobile';
import React from 'react';
//子组件,
import Person from './Person'
import Anchor from './Anchor'
import Search from '../../components/common/Search'
import TabBar from "../../components/common/TabBar";
const tabs = [
    { title: <Badge >个性推荐</Badge> },
    { title: <Badge >主播电台</Badge> }
];
const Find = () => (
    <div>
        <Search></Search>
        <Tabs tabs={tabs}
              initialPage={0}
              onChange={(tab, index) => { console.log('onChange', index, tab); }}
              onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
        >
            <Person></Person>
            <Anchor></Anchor>
        </Tabs>
        <TabBar></TabBar>
    </div>
);
export default Find;

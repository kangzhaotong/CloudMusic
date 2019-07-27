import React, {Component} from 'react';
import Paint from '../../components/find/Paint'
//引入选项卡组件
import ChangeType from '../../components/find/ChangeType'
import TopMusic from "../../components/find/TopMusic";
import TopSong from "../../components/find/TopSong";
import AnchorRadio from "../../components/find/AnchorRadio";
import FindVideo from "../../components/find/FindVideo";
export default class Person extends Component{
    render() {
        return(
            <div style={{width:'100%',background:'#fff'}}>
                <Paint></Paint>
                <ChangeType></ChangeType>
                <TopMusic></TopMusic>
                <TopSong></TopSong>
                <AnchorRadio></AnchorRadio>
                <FindVideo></FindVideo>
            </div>
        )
    }
}

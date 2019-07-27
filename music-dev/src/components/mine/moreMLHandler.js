import React from 'react'
import { ActionSheet,List ,Modal} from 'antd-mobile';
let wrapProps;
const Item = List.Item;
export const moreMLHandler = () => {

        const BUTTONS = [];
        const el = (
            <List renderHeader={() => '收藏的歌单'} >
                <Item
                    thumb={<i className={'iconfont icon-24gl-playlistMusic4'}></i>}
                    onClick={() => {}}
                    style={{borderTop:'1px solid #ccc'}}
                >歌单管理</Item>
            </List>

        );
        ActionSheet.showActionSheetWithOptions({
                options: BUTTONS,
                destructiveButtonIndex: BUTTONS.length - 2,
                title: '',
                message: el,
                maskClosable: true,
                'data-seed': 'logId',
                wrapProps,
            },
            (buttonIndex) => {
                // this.setState({ clicked: BUTTONS[buttonIndex] });
            });
}

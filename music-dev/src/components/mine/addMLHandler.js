import React from 'react'
import axios from 'axios';
import {Modal,Checkbox,Toast} from 'antd-mobile';
const alert = Modal.alert;
const AgreeItem = Checkbox.AgreeItem;



export const addMLHandler = () => {
           var alertInstance=alert('新建歌单', (
                <div className={'my_add'}>
                    <p>
                        <input id="kkk" type={'text'} placeholder={'请输入歌单名称'}  style={{border:'none' ,borderBottom:'1px solid #ccc',marginTop:'20px'}}/>
                    </p>
                    <AgreeItem data-seed="logId" onChange={e => console.log('checkbox', e)}>
                        设置为隐私歌单
                    </AgreeItem>

                </div>
            ), [
                {text: '取消', onPress: () => console.log('cancel')},
                {
                    text: '提交',
                    onPress: () =>{
                        var input = document.querySelector('#kkk');
                        console.log(input.value);
                        axios.get('/playlist/create?name='+input.value).then(({data})=>{
                            console.log(data);
                            if(data.code === 200)
                                Toast.info('添加成功',1)
                        })
                    }
                },
            ],'android')
        }


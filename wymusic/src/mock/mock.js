import MVInfo from "./mvInfo"
import Mock from "mockjs"
import Tuijian from '@/components/video/Tuijian'

const getNavList = "/getNavList" //获取导航列表
const getMVInfo = "/getMVInfo"  //获取mv信息
function navInfo() {
    return {
        ok: 1,
        msg: "获取成功",
        data: [
            {
                navtype: "推荐",
                pathName: "/tuijian",
                component:"Tuijian",
            },
            {
                navtype: "LOOK直播",
                pathName: "/zhibo",
                component: "Zhibo"
            },
            {
                navtype: "Breath andLife",
                pathName: "/breath",
                component: "Breath"
            },
            {
                navtype: "现场",
                pathName: "/xianchang",
                component: "Xianchang"
            },
            {
                navtype: "广场",
                pathName: "/guangchang",
                component: "Guangchang"
            },
            {
                navtype: "舞蹈",
                pathName: "/wudao",
                component: "Wudao"
            },
            {
                navtype: "萌宠",
                pathName: "/mengchong",
                component: "Mengchong"
            },
            {
                navtype: "翻唱",
                pathName: "/fanchang",
                component: "Fanchang"
            },
            {
                navtype: "MV",
                pathName: "/mv",
                component: "Mv"
            },
            {
                navtype: "ACG音乐",
                pathName: "/music",
                component: "Music"
            },
            {
                navtype: "生活",
                pathName: "/life",
                component: "Life"
            },
            {
                navtype: "最佳饭制",
                pathName: "/zuijia",
                component: "Zuijia"
            }
        ]
    }
}

export default [
    // Mock.mock(RegExp(login + ".*"), "get", loginByUsername),//get 必须加* 否则找不到地址
    Mock.mock(getNavList, "get", navInfo),
    Mock.mock(getMVInfo, "get", MVInfo)
]
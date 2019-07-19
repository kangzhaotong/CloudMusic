import axios from 'axios';
import * as pro from "../../actionType/video"
import baseUrl from "@/baseUrl"
// 获取导航列表
export const getNavList = () => {
    return async (dispatch) => {
        const navData = await axios.get("/getNavList")
        console.log(22222, navData.data.data)
        dispatch({
            type: pro.NAV_LIST,
            navList: navData.data.data
        })

    }
}
// 获取mv精选信息
export const getMvList = () => {
    return async (dispatch) => {
        const mvData = await axios.get(`${baseUrl}` + "/personalized/mv")
        console.log(12345,mvData)
        dispatch({
            type: pro.SELECT_MV_LIST,
            mvSelectedList: mvData.data.result
        })
    }
}
// 获取更多MV
export const getMoreMv = () => {
    const getWyMvinfo = axios.get(`${baseUrl}` + "/mv/exclusive/rcmd?limit=4")//网易
    const getNdMvinfo = axios.get(`${baseUrl}` + "/mv/first?limit=4&area=内地")//内地
    const getGtMvinfo = axios.get(`${baseUrl}` + "/mv/first?limit=4&area=港台")//港台
    const getOmMvinfo = axios.get(`${baseUrl}` + "/mv/first?limit=4&area=欧美")//欧美
    const getHgMvinfo = axios.get(`${baseUrl}` + "/mv/first?limit=4&area=韩国")//韩国
    const getRbMvinfo = axios.get(`${baseUrl}` + "/mv/first?limit=4&area=日本")//日本
    return async (dispatch) => {
        const moreMvList = await Promise.all([getWyMvinfo, getNdMvinfo, getGtMvinfo, getOmMvinfo, getHgMvinfo, getRbMvinfo])
        dispatch({
            type:pro.MORE_MV_LIST,
            moreMvList
        })
    }
}
// 获取MV排行榜
export const getRankingMv = ()=>{
    return async (dispatch)=>{
        const getNdMvinfo = axios.get(`${baseUrl}` + "/mv/first?limit=4&area=内地")//内地
        const getGtMvinfo = axios.get(`${baseUrl}` + "/mv/first?limit=4&area=港台")//港台
        const getOmMvinfo = axios.get(`${baseUrl}` + "/mv/first?limit=4&area=欧美")//欧美
        const getHgMvinfo = axios.get(`${baseUrl}` + "/mv/first?limit=4&area=韩国")//韩国
        const getRbMvinfo = axios.get(`${baseUrl}` + "/mv/first?limit=4&area=日本")//日本
        const rankingMvList = await Promise.all([ getNdMvinfo, getGtMvinfo, getOmMvinfo, getHgMvinfo, getRbMvinfo])
        dispatch({
            type:pro.RANKING_MV_LIST,
            rankingMvList
        })
    }
}

import * as initState from "../../state/video"
import * as pro from  "../../actionType/video"

// 导航栏列表信息
export const navData = (state = initState.navList,action)=>{
    switch(action.type){
        case pro.NAV_LIST:
            console.log({...state,...action})
            return {...state,...action}
        default:
            return state
    }
}

// Mv精选信息
export const selectMvData = (state=initState.selectMvInfoList,action)=>{
    switch(action.type){
        case pro.SELECT_MV_LIST:
            return{...state,...action}
        default:
            return state
    }
}
// 更多MV
export const moreMvData = (state=initState.moreMvList,action)=>{
    switch(action.type){
        case pro.MORE_MV_LIST:
            return{...state,...action}
        default:
            return state
    }
}
 // mv排行榜
export const rankingMvData = (state=initState.rankingMvList,action)=>{
    switch(action.type){
        case pro.RANKING_MV_LIST:
            return {...state,...action}
        default:
            return state
    }
}
// 更多精彩MV
export const  morvellousMvData = (state=initState.marvellousMvList,action)=>{
    switch(action.type){
        case pro.MARVELLOUS_MV_LIST:
            return {...state,...action}
        default:
            return state
    }
}
//分类MV
export const categoryMvData = (state = initState.categoryMvList,action)=>{
    switch(action.type){
        case pro.CATEGORY_MV_LIST:
            return {...state,...action}
        default:
            return state
    }
}
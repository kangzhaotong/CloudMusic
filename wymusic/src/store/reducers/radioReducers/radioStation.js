import stateInit  from "../../state/RadioStation";
import {
    UP_RADIORECOMEENDIST,
    UP_CONCENTRATELIST,
    UP_POPULARLIST,
    UP_RSBANNER_LIST,
    UP_SORTLIST,
    UP_PAYMENTLIST,
    UP_CLASSINFOLIST,
    UP_PLAYLIST,
    UP_MUSICURL,
    UP_PROGRAMLIST,
    UP_RADIODJDETAIL,
    UP_RADIODJPROGRAM,
    CHANGE_IS_LOADING,
    CHANGE_ASC
} from "../../actionType/radioStation"; 
export default function (state=stateInit,{type,payload}) {
    state = JSON.parse(JSON.stringify(state));
    if (type === UP_RADIORECOMEENDIST) {
        state.radioRecommendList = payload.radioRecommendList;
        state.i = payload.i;
    }else if (type === UP_CONCENTRATELIST) {
        state.concentrateList = payload.concentrateList
    }else if (type === UP_POPULARLIST) {
        state.popularList = payload.popularList
    }else if (type === UP_RSBANNER_LIST) {
        state.rsBannerList = payload.rsBannerList
    }else if (type === UP_SORTLIST) {
        state.radioSortList = payload.radioSortList
    }else if (type === UP_PAYMENTLIST) {
        state.rsPaymentList = payload.rsPaymentList;
        state.limit = payload.limit;
    }else if (type === UP_CLASSINFOLIST) {
        state.radioClassInfoList = payload.radioClassInfoList
    }else if (type === UP_PLAYLIST) {
        state.playMp3 = payload.playMp3
    }else if (type === UP_MUSICURL){
        state.musicUrl = payload.musicUrl
    }else if (type === UP_PROGRAMLIST){
        state.programList = payload.programList
    }else if (type === UP_RADIODJDETAIL) {
        state.djRadio = payload.djRadio;
    } else if(type === UP_RADIODJPROGRAM){
        state.djProgram = payload.djProgram;
        state.limit = payload.limit;
    }else if(type === CHANGE_IS_LOADING){
        state.isLoading = payload.isLoading
    }else if(type === CHANGE_ASC){
        state.asc = payload.asc;
    }
    return state;
}

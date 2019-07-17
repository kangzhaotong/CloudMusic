import stateInit  from "../../state/RadioStation";
import {
    UP_RADIORECOMEENDIST,
    UP_CONCENTRATELIST,
    UP_POPULARLIST,
    UP_RSBANNER_LIST,
    UP_SORTLIST,
    UP_PAYMENTLIST,
    UP_CLASSINFOLIST,
    UP_PLAYLIST
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
    }
    return state;
}

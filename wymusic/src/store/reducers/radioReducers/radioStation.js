import stateInit  from "../../state/RadioStation"
export default function (state=stateInit,{type,payload}) {
    state = JSON.parse(JSON.stringify(state));
    if(type === "UP_RADIORECOMEENDIST"){
        state.radioRecommendList = payload.radioRecommendList
    }else if(type === "UP_CONCENTRATELIST"){
        state.concentrateList = payload.concentrateList
    }else if(type === "UP_POPULARLIST"){
        state.popularList = payload.popularList
        console.log(payload.popularList)
    }
    
    return state;
}

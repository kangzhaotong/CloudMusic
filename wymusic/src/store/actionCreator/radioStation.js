import axios from 'axios';
import baseUrl from '../../baseUrl';

export default{
    getRadioRecommendList(i){
        return (dispatch) => {
            axios.get(baseUrl+"/dj/recommend")
            .then(({data})=>{
                if(i > data.djRadios.length+1){
                    i=0;
                }
                const radioRecommendList1 = data.djRadios.splice(i,i+3);
                if(radioRecommendList1.length>3){
                    const radioRecommendList = radioRecommendList1.slice(0,3);
                    dispatch({
                        type: "UP_RADIORECOMEENDIST",
                        payload: {
                            radioRecommendList,
                            i
                        }
                    })
                }else{
                    const radioRecommendList = radioRecommendList1;
                    dispatch({
                        type: "UP_RADIORECOMEENDIST",
                        payload: {
                            radioRecommendList,
                            i
                        }
                    })
                }
                
            })
        }
        
    },
    getConcentrateList(){
        return (dispatch) => {
            axios.get(baseUrl+"/dj/paygift?limit=3&offset=20")
            .then(({data})=>{     
                const concentrateList = data.data.list;
                dispatch({
                    type: "UP_CONCENTRATELIST",
                    payload: {
                        concentrateList,    
                    }
                })
            })
        }
        
    },
    getRsBannerList(){
        return (dispatch) => {
            axios.get(baseUrl+"/banner?type=4")
            .then(({data})=>{    
                const rsBannerList = data.banners.splice(3);
                dispatch({
                    type: "UP_RSBANNER_LIST",
                    payload: {
                        rsBannerList,  
                    }
                })
            })
        }
    },
    getPopularList(){
        return (dispatch) => {
            axios.get(baseUrl+"/dj/category/recommend")
            .then(({data})=>{
                const popularList = data.data.splice(0,9);
                dispatch({
                    type: "UP_POPULARLIST",
                    payload: {
                        popularList,  
                    }
                })
            })
        }
    },
    getRadioSortList(){
        return (dispatch) => {
            axios.get(baseUrl+"/dj/catelist")
                .then(({data})=>{
                    const radioSortList = data.categories;
                    dispatch({
                        type: "UP_SORTLIST",
                        payload: {
                            radioSortList
                        }
                    })
                })
                
        }
    },
    getPaymentList(limit = 20){
        return (dispatch) => {
            dispatch({
                type:"CHANGE_IS_LOADING",
                payload:{
                    isLoading:true
                }
            })  
            axios.get(baseUrl+"/dj/paygift?limit="+limit+"&offset=20")
            .then(({data})=>{   
                const rsPaymentList = data.data.list;
                dispatch({
                    type: "UP_PAYMENTLIST",
                    payload: {
                        rsPaymentList,
                        limit    
                    }
                })
                dispatch({
                    type:"CHANGE_IS_LOADING",
                    payload:{
                        isLoading:false
                    }
                })
            })
        }
    },
    getRadioClassInfoList(id){
        return (dispatch) => {
            axios.get(baseUrl+"/dj/recommend/type?type="+id)
                .then(({data})=>{
                    const radioClassInfoList = data.djRadios
                    dispatch({
                        type: "UP_CLASSINFOLIST",
                        payload: {
                            radioClassInfoList,  
                        }
                    })
                })
        }
    },
    getRadioProgramList(id){
        return (dispatch) => {
            axios.get(baseUrl+"/dj/program?rid="+id+"&limit=20")
                .then(({data})=>{
                    const programList = data.programs
                    dispatch({
                        type: "UP_PROGRAMLIST",
                        payload: {
                            programList,  
                        }
                    })
                })
        }
    },
    getPlayList(id){
        return (dispatch) => {
            axios.get(baseUrl+"/dj/program?rid="+id+"&limit=20")
                .then(({data})=>{
                    const playMp3 = data.programs
                    dispatch({
                        type: "UP_PLAYLIST",
                        payload: {
                            playMp3
                        }
                    })
                })
        }
    },
    getMusicUrl(mainSongId){
        return (dispatch) => {
            axios.get(baseUrl+"/song/url?id="+mainSongId)
                .then(({data})=>{
                    const musicUrl = data.data[0].url;
                    dispatch({
                        type: "UP_MUSICURL",
                        payload: {
                            musicUrl
                        }
                    })
                })
        }
    }
}


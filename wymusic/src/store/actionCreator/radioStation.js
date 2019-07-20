import axios from 'axios';
import baseUrl from '../../baseUrl';
import {UP_RADIODJDETAIL, UP_RADIODJPROGRAM, CHANGE_IS_LOADING} from "../actionType/radioStation";

export default {
    getRadioRecommendList(i) {
        return (dispatch) => {
            axios.get("/wymusic/dj/recommend")
                .then(({data}) => {
                    if (i > data.djRadios.length + 1) {
                        i = 0;
                    }
                    const radioRecommendList1 = data.djRadios.splice(i, i + 3);
                    if (radioRecommendList1.length > 3) {
                        const radioRecommendList = radioRecommendList1.slice(0, 3);
                        console.log(555, radioRecommendList)
                        dispatch({
                            type: "UP_RADIORECOMEENDIST",
                            payload: {
                                radioRecommendList,
                                i
                            }
                        })
                    } else {
                        const radioRecommendList = radioRecommendList1;
                        console.log(333, radioRecommendList)
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
            axios.get("/wymusic/dj/paygift?limit=3&offset=20")
                .then(({data})=>{
                    const concentrateList = data.data.list;
                    console.log(2222,data)
                    dispatch({
                        type: "UP_CONCENTRATELIST",
                        payload: {
                            concentrateList,
                        }
                    })
                })
        }

    },
    getRsBannerList() {
        return (dispatch) => {
            axios.get("/wymusic/banner?type=4")
                .then(({data}) => {
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
            axios.get("/wymusic/dj/category/recommend")
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
            axios.get("/wymusic/dj/catelist")
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
            axios.get("/wymusic/dj/paygift?limit="+limit+"&offset=20")
                .then(({data})=>{
                    console.log(data)
                    const rsPaymentList = data.data.list;
                    dispatch({
                        type: "UP_PAYMENTLIST",
                        payload: {
                            rsPaymentList,
                            limit
                        }
                    })
                })
        }

    },
    getDjRadioDetail(rid) {
        return (dispatch) => {
            axios.get(baseUrl + "/dj/detail?rid=" + rid)
                .then(({data}) => {
                    dispatch({
                        type: UP_RADIODJDETAIL,
                        payload: {
                            djRadio: data.djRadio
                        }
                    })
                })
        }
    },
    getDjRadioProgram(rid, limit = 30) {
        return (dispatch) => {
            dispatch({
                type: CHANGE_IS_LOADING,
                payload: {
                    isLoading: true
                }
            })
            axios.get(baseUrl + "/dj/program?rid=" + rid + "&limit=" + limit)
                .then(({data}) => {
                    let playTime = 0;
                    data.programs.map(v=>{
                        // console.log(999999,v.mainSong);

                    })

                    dispatch({
                        type: UP_RADIODJPROGRAM,
                        payload: {
                            djProgram: data,
                            limit
                        }
                    })
                    if(limit > data.count+20) return
                    dispatch({
                        type: CHANGE_IS_LOADING,
                        payload: {
                            isLoading: false
                        }
                    })
                })
        }
    }
}


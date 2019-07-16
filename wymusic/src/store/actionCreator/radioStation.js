import axios from 'axios';
import baseUrl from '../../baseUrl';

export default{
    getRadioRecommendList(){
        return (dispatch) => {
            axios.get(baseUrl+"/personalized/djprogram")
            .then(({data})=>{
                const radioRecommendList = data.result.splice(3,6);
                dispatch({
                    type: "UP_RADIORECOMEENDIST",
                    payload: {
                        radioRecommendList,  
                    }
                })
            })
        }
        
    },
    getConcentrateList(){
        return (dispatch) => {
            axios.get(baseUrl+"/dj/paygift?limit=3&offset=20")
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
            axios.get(baseUrl+"/dj/paygift?limit="+limit+"&offset=20")
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
}


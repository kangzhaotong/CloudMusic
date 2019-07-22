import {CHANGEISLOADING} from '../actionType/isLoading';

export default {
    changeLoading(isLoading) {
        return {
            type: CHANGEISLOADING,
            payload: {
                isLoading
            }
        }
    }
}
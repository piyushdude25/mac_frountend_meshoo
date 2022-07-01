import {ActionTypes} from '../constants/action-types'

const initialState = {
    // cardData: []
    success:false,
    error: false
}

export const addToCart = (state = initialState , action) => {
    switch (action.type) {
        case ActionTypes.ADD_TO_CART_SUCCESS:
            // console.warn("REducer",action)
            return {
                ...state,
                success:true
            };
                
            case ActionTypes.ADD_TO_CART_FAILED:
                // console.warn("REducer",action)
                return {
                    ...state,
                    success:false,
                    error:true
                }    
            
            default:
                return state
    }
}




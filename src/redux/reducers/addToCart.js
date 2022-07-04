import {ActionTypes} from '../constants/action-types'

const initialState = {
    // cardData: []
    count: 0,
    success:false,
    error: false,
   
}

export const addToCart = (state = initialState , action) => {
    switch (action.type) {
        case ActionTypes.ADD_TO_CART_SUCCESS:
            // console.warn("REducer",action)
            return {
                ...state,
                success:true,
                count:state.count+1,
                
            };
                
        case ActionTypes.ADD_TO_CART_FAILED:
                // console.warn("REducer",action)
                return {
                    ...state,
                    success:false,
                    error:true
                }    
// <<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>></>
case ActionTypes.DELETE_CART_DATA_SUCCESS:
    // console.warn("REducer",action)
    return {
        ...state,
        // success:true,
        count:state.count-1,
        
    };
// <<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>></>
        default:
                return state
    }
}





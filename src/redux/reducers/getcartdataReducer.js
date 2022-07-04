import {ActionTypes} from '../constants/action-types'

const initialData = {
 
    cart:[],
   
    error:false

}


export const getcartdataReducer = (state = initialData , action) => {
    switch (action.type) {
        case ActionTypes.GET_CART_DATA_SUCCESS:
            // console.warn("REducer",action)
            return {
                ...state,
                cart:action.payload
            };
                
            case ActionTypes.GET_CART_DATA_FAILED:
                // console.warn("REducer",action)
                return {
                    ...state,
                    error:true
                }    
            
            default:
                return state
    }
}



import {ActionTypes} from '../constants/action-types'

const initialState = {
    products: [],
    count : 0,

    logindata:{},
    token:""


}

export const productReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: payload};

        case ActionTypes.FETCH_PRODUCTS:
            return { ...state, products: payload};

//Tlogin..
        case ActionTypes.LOGIN_DETAIL:
             return{...state, logindata:payload, token:payload} 


        default: 
            return state;
    }
}




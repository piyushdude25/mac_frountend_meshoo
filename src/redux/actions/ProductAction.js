import axios from "axios"
import {ActionTypes} from '../constants/action-types'
import Storeapi from "../../apis/Storeapi"

export const setProducts = (products) => {
    return {
        type : ActionTypes.SET_PRODUCTS,
        payload: products,
    }
}
export const selectedProduct = (product) => {
    return {
        type : ActionTypes.SELECTED_PRODUCT,
        payload: product,
    }
}

export const removeSelectedProduct = () => {
    return {
      type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    };
  };

//by thunk..
export const fetchProducts = () => async  (dispatch) => {
  const response = await Storeapi.get("/products") ;
  dispatch({type : ActionTypes.FETCH_PRODUCTS, payload : response.data})
    };


export const fetchProduct = (id) => async (dispatch)=> {
    const response = await Storeapi.get(`/products/${id}`) ;
    dispatch({type : ActionTypes.SELECTED_PRODUCT, payload: response.data})
        
    }


//try for post...
export const postProduct = (product) => async (dispatch)=> {
    const response = await Storeapi.post("/cart", {product}) ;
    dispatch({type : ActionTypes.POST_CART, payload: response.data})
        
    }


    ///action cartRedux...
    export const addcart = (value) => {
        return {
          type: ActionTypes.ADD_CART,
          payload: value,
        };
      };
      export const incpricequantity = (value) => {
        return {
          type: ActionTypes.INC_PRICE_QUANTITY,
          payload: value,
        };
      };
      export const deleteCart=(value)=>{
        return {
          type: ActionTypes.DELETE_CART,
          payload:value
        }
      
      }
      
      
      
      export const totalPrice=(value)=>{
        return {
          type: ActionTypes.TOTAL_PRICE,
          payload:value
        }
      }
      
        export const totalDiscount=(value)=>{
          return {
            type: ActionTypes.TOTAL_DISCOUNT,
            payload:value
          }
      }
  


      ////////////TLogin/////
      export const Login_detail=(data)=>({
        type:"LOGIN_DETAIL",
        payload:data
      })

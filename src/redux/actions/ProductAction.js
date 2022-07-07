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
  const response = await Storeapi.get("/products") 
  
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


     ////////////add_to_card/////
    export const addToCart = (data) => {
    
      return async (dispatch) => {
      
     const cartData =  await axios
    .post("https://db-server-mesho.herokuapp.com/cartproduct", data)
    // .post("http://localhost:8000/cart", data)
    // .then()
    // alert("Item added to Cart")
    .catch((e)=> {console.log(e);
    alert("Item Allready added to Cart")})

    if(cartData ){
      dispatch(getCartData());
      dispatch({ 
        type: ActionTypes.ADD_TO_CART_SUCCESS,
        
        //  payload: { cartItems } 
        });
        alert("Item added to Cart")
    }else{
      dispatch({
         type: ActionTypes.ADD_TO_CART_FAILED,
          // payload: { cartItems }
         });
        
    }
    
      };
  }




  ///get card data...........
  export const getCartData = () => {

    return async (dispatch) => {
   const cartData =  await axios
  .get("https://db-server-mesho.herokuapp.com/cartproduct")
      console.log("cartDataaaaaaaaaa",cartData.data)

  if(cartData ){
    dispatch({ 
      type: ActionTypes.GET_CART_DATA_SUCCESS,
       payload:  cartData.data 
      });
  }else{
    dispatch({
       type: ActionTypes.GET_CART_DATA_FAILED,
        // payload: { cartItems }
       });
  }
    };
}



///delete card data...........
export const deleteCartData = (id) => {
  return async (dispatch) => {

 
  
 const dcartData =  await axios
.delete(`https://db-server-mesho.herokuapp.com/cartproduct/${id}`)
    console.log("cartData...",dcartData)

      if(dcartData ){
        alert("Item deleted to Cart")
          dispatch(getCartData())
      }

  };
}

///inc-dec quantity ..................................
 // increment the item
 export const increment = (id) => {
  return ({
    type: ActionTypes.INCREMENT,
    payload: id,
    
  });
};

// decrement the item
export const decrement = (id) => {
  return ({
    type: ActionTypes.DECREMENT,
    payload: id,
  });
};




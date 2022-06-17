import {ActionTypes} from '../constants/action-types'

const init = {
    count: 0,
    price: 0,
    cartproduct: [],
    totalDiscount : 0,
  };
  export const cartReducer = (state = init, { type, payload }) => {
    switch (type) {
      case ActionTypes.ADD_CART:
      
        const check = state.cartproduct.find((pr) => pr.id === payload.id);
        if (check) {
          return {
            ...state,
            
  
            cartproduct: [...state.cartproduct],
          };
        } else {
          return {
            ...state,
            count:state.count+1,
  
            cartproduct: [...state.cartproduct, payload],
          };
        }
        
      case ActionTypes.TOTAL_ITEMS:
        return {
          ...state,
          count:state.count+payload,
          price: +state.price + +payload.price,
          discount: +state.discount + +payload.discount,
        };
  
      case ActionTypes.DELETE_CART:
        console.log("payload", payload);
        const newlist = state.cartproduct.filter((x) => {
          console.log("payload", x);
  
          return x.id !== payload.id;
        });
        console.log("newlist", newlist);
        return {
          ...state,
          count:state.count-1,
          cartproduct: [...newlist],
        };
  
        case ActionTypes.TOTAL_PRICE:
          return {
            ...state,price:payload
          }
  
          case ActionTypes.TOTAL_DISCOUNT:
            return {
              ...state,totalDiscount:payload
            }
  
      default:
        return state;
    }
  };
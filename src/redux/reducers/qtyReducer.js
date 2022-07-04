import {ActionTypes} from '../constants/action-types'

const initialData = {     qty: 0, }

export const qtyReducer = (state = initialData , action) => {
    switch (action.type) {
        case ActionTypes.INCREMENT:
            const updatedIncCart = state.item.map((curElem) => {
                if (curElem.id === action.payload) {
                  return { ...curElem, quantity: curElem.quantity + 1 };
              
                }
                return curElem;
              });
              console.log("qty...:",state)
              return { ...state, item: updatedIncCart };

            
                
        case ActionTypes.DECREMENT:
            const updatedDecCart = state.item.map((curElem) => {
              if (curElem.id === action.payload) {
                return { ...curElem, quantity: curElem.quantity - 1 };
              }
              return curElem;
            })
            .filter((curElem) => curElem.quantity !== 0);
          return { ...state, item: updatedDecCart }; 
            
            default:
                return state
    }
}



import {combineReducers} from 'redux'
import { productReducer} from './productsReducer'
import {  selectedProductReducer} from './selectedProductReducer'
import {  cartReducer} from './cartReducer'
import {  addToCart} from './addToCart'
import { getcartdataReducer } from './getcartdataReducer'

 const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
    cartReducer:cartReducer,
    addToCart: addToCart,
    getcartdataReducer:getcartdataReducer,

})
export default reducers
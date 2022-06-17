import {combineReducers} from 'redux'
import { productReducer} from './productsReducer'
import {  selectedProductReducer} from './selectedProductReducer'
import {  cartReducer} from './cartReducer'

 const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
    cartReducer:cartReducer,
 

})
export default reducers
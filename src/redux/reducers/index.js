import { combineReducers } from "redux";
import { productReducer } from "./productsReducer";
import { selectedProductReducer } from "./selectedProductReducer";
import { cartReducer } from "./cartReducer";
import { addToCart } from "./addToCart";
import { getcartdataReducer } from "./getcartdataReducer";
import { qtyReducer } from "./qtyReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  cartReducer: cartReducer,
  addToCart: addToCart,
  getcartdataReducer: getcartdataReducer,
  qtyReducer: qtyReducer,
});
export default reducers;

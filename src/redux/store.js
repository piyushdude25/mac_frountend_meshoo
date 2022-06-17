import { createStore, applyMiddleware, compose} from 'redux'
import reducers from './reducers/index'
// import { combineReducers } from "redux";

import thunk from "redux-thunk"

// const rootReducers = combineReducers({
//    cart: cartReducer,
//     reducers:reducers,
//  });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

 const store = createStore(
   // rootReducers,
   reducers,
    // {}, 
    composeEnhancers(applyMiddleware(thunk))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    export default store;




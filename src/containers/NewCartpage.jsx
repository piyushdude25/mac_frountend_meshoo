import React, { useEffect, useState } from "react";
import "./cartpage.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ActionTypes } from "../redux/constants/action-types";
import { getCartData, deleteCartData, increment, decrement } from "../redux/actions/ProductAction";

const NewCartpage = () => {
  const dispatch = useDispatch();

  const dataCart = useSelector((state) => state.getcartdataReducer.cart);
  // const [deleteCart, setDeleteCart] = useState();
  console.log("DATACart.....",dataCart)

//////////////////////inc  ///////////////////////////////////////////////////
//   const [quantity, setQuantity] = useState(0)
// const decQty = (id) => {
//   setQuantity(quantity-1)
// }

// const incQty = (id) => {
//   var incData = dataCart.filter((e) => {e.id=id})
//   if(incData){
//     setQuantity(quantity+1)
//   }
// }
// =========================================================================================
  // // increment the item
  // const increment = (id) => {
  //   return dispatch({
  //     type: "INCREMENT",
  //     payload: id,
  //   });
  // };

  // // decrement the item
  // const decrement = (id) => {
  //   return dispatch({
  //     type: "DECREMENT",
  //     payload: id,
  //   });
  // };


//////////////////////////////////////////////////////=




  useEffect(() => {
    // getCartData()
     dispatch(getCartData());
  
    
  }, []);

  const deleteCartItem = (id) => {
    dispatch(deleteCartData(id));
    // setDeleteCart(id);
    // dispatch(getCartData());
  };

  var total = 0;
  var totalItems = 0;


  return (
    <div className="cart-container">
      <div className="cart-body">

        <div className="cart-left">
          {dataCart.map((cart) => {
            total = total + +cart.price;
            totalItems = totalItems + 1;
            return (
            
              <div className="cart-items-container" key={cart.id}>
                <div className="cart-img-div">
                  <img className="img1" src={cart.img1} alt="" />
                </div>
                <div className="cart-info">
                  <span>{cart.name}</span>
                  <br />
                  <span>{cart.price}</span>
                  <br />
                  <span>{cart.description}</span>
                  <br />
                  <span>{cart.delivery}</span>

{/* ////////////////////////////////////////////// */}
                  {/* <div>
                    <button onClick={()=> {decQty(cart.id)}}>-</button>
                    <span>{quantity}</span>
                    <button onClick={()=> {incQty(cart.id)}} >+</button>
                  </div> */}
{/* ================================================================================================*/}
        <div className="add-minus-quantity">
          {/* <i className="fas fa-minus minus" onClick={() => decrement(cart.id)}></i>
          <input type="text" placeholder={quantity} disabled />
          <i className="fas fa-plus add" onClick={() => increment(cart.id)}></i> */}

          {/* <button onClick={()=>(dispatch(decrement(cart.id)))} >-</button>
            <span>{cart.quantity}</span>
          <button onClick={()=>(dispatch(increment(cart.id)))} >+</button> */}
        </div>


{/* /////////////////////////////////////////////////// */}
                </div>

                <span className="cross" onClick={ () => deleteCartItem(cart.id)}>
                  x
                </span>

                

              </div>


            );
          })}
        </div>

        {/* ----------------------------------------- */}
        <div className="cart-right">
          <div className="cart-details-with-price">
            <h3>Product Details </h3>
            <br />
            <div className="details">
              <p style={{}}>Total Products :</p>
              <span>
                <b>{totalItems}</b>
              </span>
            </div>

            <div className="details">
              <p style={{ padding: "0px" }}>Total Product Price :</p>
              <span>
                <b>${total}</b>
              </span>
            </div>
          </div>
          <br />
      
          <Link to="/product/checkout" className="linkBtn">
            <button className="SaveBtn" >   Buy Now</button>
          </Link>
    
        </div>

        {/* -------------------------------- */}
      </div>
    </div>
  );
};

export default NewCartpage;

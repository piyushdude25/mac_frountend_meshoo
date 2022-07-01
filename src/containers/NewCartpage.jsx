import React, { useEffect, useState, useSyncExternalStore } from "react";
import "./cartpage.css";
import axios from "axios";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
//import {ADD_ITEMS} from '../CartRedux/action';
import {ActionTypes} from "../redux/constants/action-types";
import { getCartData } from "../redux/actions/ProductAction";


const NewCartpage = () => {
  const dispatch = useDispatch();

  //const [state, setState] = useState([]);

//////////by Api --------------------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// const [cart, setCart] = useState([]);
// console.log("data.....",cart)

const dataCart = useSelector(state => state.getcartdataReducer.cart) 
console.log("DATACart.....",dataCart)

useEffect(() => {
    // handleCartDetail();
    // getCartData()
    dispatch( getCartData())

  }, []);


  const handleRate = (id) => {
    axios.delete(`https://db-server-mesho.herokuapp.com/cartproduct/${id}`)
    .then((res) => {
      // handleCartDetail();
    //   dispatch(navCart());
    });
  };





///////////////----------------------zxxxxxxxxxzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

  var total = 0;
   var totalItems =0;
   var totalDiscount=0




  
  const Cartitems = (cart) => {
    total = total + +cart.price;
    totalItems=totalItems + 1;
    dispatch({type: ActionTypes.TOTAL_PRICE,payload:total}); 

    totalDiscount= totalDiscount + +cart.discount;
    dispatch({type: ActionTypes.TOTAL_DISCOUNT,payload:totalDiscount}); 
        //dispatch({type:TOTAL_ITEMS,payload:totalItems});



    return (
      <div className="cart-items-container" key={cart.id}>
        <div className="cart-img-div">
          <img className="img1"  src={cart.img1} alt="" />
        </div>
        <div className="cart-info">
          <span>{cart.name}</span>
          <br />
          <span>{cart.price}</span>
          <br />
          <span>{cart.description}</span>
          <br />
          <span>{cart.delivery}</span>

     
        </div>

        <span className="cross" onClick={() => handleRate(cart.id)}>
          x
        </span>
      </div>
    );
  };


  return (
    <div className="cart-container">
     
      <div className="cart-body">
         
      <div className="cart-left">{dataCart.map(Cartitems)}</div>
        {/* <div className="cart-left">{dataCart.map((cart)=> {} */}
        






        {/* ----------------------------------------- */}
        <div className="cart-right">
          <div className="cart-details-with-price">
            <h3>Product Details  </h3>
<br/>
            <div className="details">
              <p style={{  }}>Total Products :</p>
              <span><b>{totalItems}</b></span>
            </div>

            <div className="details">
              <p style={{ padding: "0px" }}>Total Product Price :</p>
              <span><b>${total}</b></span>
             
            </div>
          </div>
          <br/>
          {/* <div  > */}
            <Link to="/product/checkout" className='linkBtn'>
             
              <Button className='SaveBtn' variant="outlined"> Buy Now </Button>
            </Link>
          {/* </div> */}
        </div>


{/* -------------------------------- */}


      </div>
    </div>
  );
};

export default NewCartpage;



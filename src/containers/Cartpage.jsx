import React, { useEffect, useState, useSyncExternalStore } from "react";
import "./cartpage.css";
import axios from "axios";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
//import {ADD_ITEMS} from '../CartRedux/action';
import {ActionTypes} from "../redux/constants/action-types";


const Cartpage = () => {
  const dispatch = useDispatch();

  const [amount, setAmount] = useState(1)
  const [subTotalamount, setsubTotalamount] = useState(1)
  //const [state, setState] = useState([]);

  //////by Api --------------------------------
  const [cartData, setCartData] = useState([])
  useEffect(()=>{ 
    handleCart()
},[])
  const handleCart = ()=> {
    axios.get("https://meesho-clone2.herokuapp.com/")
    .then((product)=> setCartData(product))
  }

 
console.log("data......" ,cartData)



///////////////----------------------
  const[addCards,setAddCards] = useState(1)
  // console.log("stateinc..",setState(state+1))
  
  const state=useSelector(state=>state.cartReducer.cartproduct);
  
  const totalcart=useSelector(state=>state.cartReducer.cart);
  //console.log("cartdata",cartdata);


  var total = 0;
   var totalItems =0;
   var totalDiscount=0

  const removecard = (card) => {
    dispatch({type: ActionTypes.DELETE_CART,payload:card})
    
   
  };



  const selecthangleChange= (e)=>{
    setAmount(e.target.value)
  }
console.log("amount..x:",amount)

// const sortedTotalPrice=  ()=> {
//   setsubTotalamount(amount*cart.price)
// }

  
  const Cartitems = (cart) => {
    total = total + +cart.price;
    totalItems=totalItems + 1;
    dispatch({type: ActionTypes.TOTAL_PRICE,payload:total}); 

    totalDiscount= totalDiscount + +cart.discount;
    dispatch({type: ActionTypes.TOTAL_DISCOUNT,payload:totalDiscount}); 
        //dispatch({type:TOTAL_ITEMS,payload:totalItems});
    return (
      <div className="cart-items-container">
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

          <div className="">
              <span onChange={(e)=> {dispatch({type: ActionTypes.TOTAL_ITEMS, payload:e.target.value-1})}}> - </span>

              <span>{addCards}</span> 
              <span onChange={(e)=> {dispatch({type: ActionTypes.TOTAL_ITEMS, payload:e.target.value+1})}}> + </span>
              <select onChange={selecthangleChange}>
                <option>Quantity</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select> 
              <span>{amount*cart.price}</span>
           </div>

        </div>

        <span className="cross" onClick={() => removecard(cart)}>
          x
        </span>
      </div>
    );
  };

 

  console.log("state......", state);

  // console.log("pro........",state.cartproduct)


  return (
    <div className="cart-container">
      <br/><br/>
      {/* <div className="cart-navbar">
        <b>
          <u>Your Product Details</u>
        </b>
      </div> */}
      <div className="cart-body">
        <div className="cart-left">{state.map(Cartitems)}</div>


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

export default Cartpage;

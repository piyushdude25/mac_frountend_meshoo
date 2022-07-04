import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";
import {fetchProduct,removeSelectedProduct,addToCart} from "../redux/actions/ProductAction";
import "./ProductDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Rating} from '@mui/material'
import {ActionTypes} from "../redux/constants/action-types";
import axios from "axios";


const ProductDetails = () => {


  const dispatch = useDispatch();
  const [cart, setCart] = useState({});
// console.log("selected data:..",cart)

  // const { productId } = useParams();
  const { id } = useParams();
  let product = useSelector((state) => state.product);
  // const [product, setProduct] = useState([]);

  
  // useEffect(() => {
  //   axios.get(`https://meesho123.herokuapp.com/products/${id}`)
  //   .then((response) => {
  //     console.log(response.data);
  //     // setProduct(...[response.data]);
  //   });
  // }, []);


  // axios
  // .get(`https://db-server-mesho.herokuapp.com/products/${id}`)
  // .then(({ data }) => {
  //   setCart(data);
  // });
  
useEffect(()=> {
  axios
  .get(`https://db-server-mesho.herokuapp.com/products/${id}`)
  // .get(`http://localhost:8000/products/${id}`)
  .then(({ data }) => {
    setCart(data);
  });

},[])

useEffect(() => {
  if (id && id !== "") {dispatch(fetchProduct(id))} ;
  return () => {
    dispatch(removeSelectedProduct());
  };
}, []);



  const { Pid,image,img1,img2,img3,name,price,category,delivery,reviews, discount,sub_category,gender,product_type,ratings, description,} = product;

  const handlesubmit = () => {
    const payload = {
      gender: cart.gender,
      product_type: cart.product_type,
      category: cart.category,
      sub_category: cart.sub_category,
      name: cart.name,
      price: cart.price,
      discount: cart.discount,
      ratings: cart.ratings,
      delivery: cart.delivery,
      reviews: cart.reviews,
      description: cart.description,
      img1: cart.img1,
    };
    axios
    .post("https://db-server-mesho.herokuapp.com/cartproduct", payload)
    // .post("http://localhost:8000/cart", payload)
    .then(({data})=> {dispatch(addToCart()) })
    alert("Item added to Cart")
    .catch((e)=> {console.log(e)})
  
  }

 
  return (
    <div className="ui grid container" key={id}>
     
      {cart === undefined  ? ( 
      <img src="http://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/Social_dino-with-hat.gif" style={{ width: "100%", height: "100%" }}alt=""/>
      )
      
      : (
        <div className="mainBox flex">
          <div className="leftSide border">
            <div className="mImg">
              <img  className="imgs" src={img1} alt={name} />
              <img  className="imgs" src={image} alt={name} />
            </div>
            
            <div className="sImg flex">
              <img className="imgs" src={img1} alt={name} />
              <img className="imgs" src={img2} alt={name} />
              <img className="imgs" src={img3} alt={name} />
            </div>

            </div>

          <div className="rightSide border">
            <div className="">
              <h2>{name}</h2>

              <div className="flex gap3 ">
                <h2>${price} </h2>
                <h4> ${discount} </h4>
                <h4> {(price - discount) / 100}% OFF </h4>
              </div>
<br/><hr/><br/>
              <div className="flex gap3">
                <div>{ratings} </div>
                <Rating value={Math.floor(ratings)} precision={0.5} size='small' style={{color: 'green'}}   />
                <div>{reviews} Reviews</div>
              </div>

              <div>${(discount + 7) / 10} discount on 1st order</div>
              <div>{delivery} Delivery</div>
            </div>

           
<br/><hr/><br/>
            <div className="details ">
              <h3>Product Details :</h3>
             
              <p>Description : {description}</p>
            </div>



            
          </div>
          <div  className="buttons-cart">
    

           {/* <Button className="btns" variant="outlined" onClick={() => dispatch({type:ActionTypes.ADD_CART, payload:product})}>ADD TO CART</Button> */}
           {/* <Button className="btns" variant="outlined" onClick={()=>(handlesubmit())}>ADD TO CART 1</Button> */}
           <Button className="btns" variant="outlined" onClick={()=>(dispatch(addToCart(cart)))}>ADD TO CART</Button>

           <span> ‎ </span>
       
           <Link to="/product/cart">  <Button className="btns" variant="outlined"> Go To Checkout</Button></Link>
</div>
            
          
          </div>
        
      )}
    </div>
  );
};

export default ProductDetails;

import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts,fetchProducts     , sortfetchProducts} from "../redux/actions/ProductAction";
import ProductComponent from "./ProductComponent";
import "./ProductList.css";
import "./SearchAppBar.css"
import { useState } from "react";

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import DropSortCategory from "./DropSortCategory";
import { Link } from "react-router-dom";
import loadingGif from "./images/loadingGif.gif"
import { margin } from "@mui/system";

const ProductPage = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const [price, setPrice] = useState("price");
  const [order, setOrder] = useState();



//////////for sorting...........
 const handleSorted =(order)=>{
  axios
  .get(`https://meesho-clone2.herokuapp.com/products?_sort=price&_order=${order}`)
  .then(({data})=>{
      console.log("sorting:",data)
      
      dispatch(setProducts(data));
      // dispatch(fetchProducts(data))
  })
}



 
  useEffect(() => {
    
    dispatch (fetchProducts());
    // fetchProductsxxxxxxx();
    // handleSorted();
   }, [order]);


  return (
    <>

<div  className="try">
    <DropSortCategory/>
</div>
   


      <div className="sortBtns">
        {" "}
      

        <button variant="text" onClick={()=>handleSorted("asc")}>low to high</button>
        <button variant="text" onClick={()=>handleSorted("desc")}>high to low</button>


     
      




      </div>


      {products.length === 0 ? ( 
        <div>
          <h3 className="loading">Loading...</h3>
      <img
      src="http://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/Social_dino-with-hat.gif"
      style={{ width: "100%", height: "100%" }}
      alt=""
    />
        </div>
        ) 
        : ( 
          
        
          
        <div className="ProductBox">
       {products.map((e) => {
       return <ProductComponent product={e} key={e.id} />;
       
       })}
        </div>
        ) 
        
        }

    
    </>
  );
};

export default ProductPage;

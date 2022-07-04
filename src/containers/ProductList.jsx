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
  // const [order, setOrder] = useState();



//////////for sorting.....................................................................................
//  const handleSorted =(order)=>{
//   axios
//   .get(`https://db-server-mesho.herokuapp.com/products?_sort=price&_order=${order}`)
//   .then(({data})=>{
//       // console.log("sorting:",data)
      
//       dispatch(setProducts(data));
//       // dispatch(fetchProducts(data))
//   })
// }


useEffect(() => {
    
  dispatch (fetchProducts());
  // fetchProducts();
  // handleSorted();

 }, []);


///////////////////////////////////////////////NEW SORTING TRY---------------------------------------------

const [data, setData] = useState([]);
const [value, setValue] = useState("");
const [sortValue, setSortValue] = useState("");
const sortOptions = ['gender'   , 'name' , 'price' , 'discount' ,'ratings']

//search---
const handleSearch = async (e)=>{
  e.preventDefault()
  return await axios
  // .get(`https://db-server-mesho.herokuapp.com/products?q=${value}`)
  .get(` http://localhost:8000/products?q=${value}`)
  .then(({data})=>{
      // console.log("sorting:",data)
      
      dispatch(setProducts(data));
      // dispatch(fetchProducts(data))
  }).catch((err) => console.log(err))
}

// reset ---
const handleReset = () => {
  dispatch (fetchProducts());
}
const handleSort = async (e)=>{
  let value = e.target.value;
  setSortValue(value);
  return await 
  axios
  // .get(`https://db-server-mesho.herokuapp.com/products?_sort=${value}&_order=asc`)
  .get(`http://localhost:8000/products?_sort=${value}&_order=asc`)
  .then(({data})=>{
      // console.log("sorting:",data)
      
      dispatch(setProducts(data));
      // dispatch(fetchProducts(data))
  }).catch((err) => console.log(err))
}

const handleSortD = async (e)=>{
  let value = e.target.value;
  setSortValue(value);
  return await 
  axios
  // .get(`https://db-server-mesho.herokuapp.com/products?_sort=${value}&_order=asc`)
  .get(`http://localhost:8000/products?_sort=${value}&_order=desc`)
  .then(({data})=>{
      // console.log("sorting:",data)
      
      dispatch(setProducts(data));
      // dispatch(fetchProducts(data))
  }).catch((err) => console.log(err))
}

//filter----
const handleFilter = async (value)=>{
  
  return await 
  axios
  // .get(`https://db-server-mesho.herokuapp.com/products?category=${value}`)
  .get(`http://localhost:8000/products?category=${value}`)
  .then(({data})=>{
      // console.log("sorting:",data)
      
      dispatch(setProducts(data));
      // dispatch(fetchProducts(data))
  }).catch((err) => console.log(err))
}
///--------------------------------------------------------------------------------------------------------
 


  return (
    <>

<div  className="try">
    <DropSortCategory/>
</div>
   


      <div className="sortBtns">
        {" "}
        {/* <button variant="text" onClick={()=>handleSorted("asc")}>low to high</button>
        <button variant="text" onClick={()=>handleSorted("desc")}>high to low</button> */}


 {/* ///////////////////////////////////////////////NEW SORTING TRY--------------------------------------------- */}
 <div className="TRYSORTING">
 <br /><br /><br />
<button onClick={()=> handleReset()} >reset</button>
<br /><br />
  <select name="" id="" onChange={handleSort} value={sortValue}>

    <option value="">Sort by Asc:</option>
    {sortOptions.map((item,index) => (
      <option value={item} key = {index}>{item}</option>
    
    ))}
  </select>
  <br /><br /><br />
  <select name="" id="" onChange={handleSortD} value={sortValue}>

    <option value="">Sort by Desc:</option>
    {sortOptions.map((item,index) => (
      <option value={item} key = {index}>{item}</option>
    
    ))}
  </select>
</div>

{/* <div>
<button onClick={()=> handleFilter("shirt")} > active</button>
<button onClick={()=> handleFilter("saree")} > Inactive</button>
</div> */}



{/* <form action="" onSubmit={handleSearch}>
    <input type="text" placeholder="search name" value={value} onChange={(e) => setValue(e.target.value)} />
    <button type="submit" >search</button>
</form> */}
{/* ///////////////////////////////////////////////NEW SORTING TRY--------------------------------------------- */}


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

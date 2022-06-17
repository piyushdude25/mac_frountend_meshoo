import React from 'react'
import { Link } from "react-router-dom";
import "./SearchAppBar.css";

import axios from "axios";
import { setProducts,fetchProducts } from "../redux/actions/ProductAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const DropSortCategory = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSortedData =(query)=>{
    axios.get(`https://meesho-clone2.herokuapp.com/products?category=${query}`).then(({data})=>{
        console.log("catrgory:",data)
        navigate("/product");
        dispatch(setProducts(data));
    })
  }




  return (
    <>
     <br/>
<div className="flex DropDownBox">

<hr/>
        
        <div className="dropdown">
          <div className="dropbtn">Women Ethnic</div>
          <div className="dropdown-content c1">
            <div className="row flex">
              <div className="column">
                <h3 className="productLink" onClick={()=>handleSortedData("saree")}>All Women Ethnic </h3>
                <ul>View All</ul>
                <ul>Tshirtsg</ul>
                <ul>Shirts</ul>
              </div>
              <div className="column">
                <h3 className="productLink" onClick={()=>handleSortedData("saree")} >Sarees</h3>
                <ul>All Sarees</ul>
                <ul>Silk Sarees</ul>
                <ul>Cotton Silk</ul>
              </div>
              <div className="column">
                <h3 className="productLink" onClick={()=>handleSortedData("kurti")} >Kurtis</h3>
                <ul>All Kurties</ul>
                <ul>Royal Kurties</ul>
                <ul>Cotton Kurties</ul>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown">
          <div className="dropbtn">Women Western</div>
          <div className="dropdown-content c2">
            <div className="row flex">
              <div className="column">
                <h3 className="productLink" onClick={()=>handleSortedData("shirt")} >Topwear</h3>
                <ul>Dresses</ul>
                <ul>Tops</ul>
                <ul>Sweaters</ul>
                <ul>Jumpsuits</ul>
              </div>
              <div className="column">
                <h3 className="productLink" onClick={()=>handleSortedData("shirt")} >Bottomwear</h3>
                <ul>jeans</ul>
                <ul>Jeggings</ul>
                <ul>Palazzos</ul>
                <ul>Shorts</ul>
              </div>
              <div className="column">
                <h3 className="productLink" onClick={()=>handleSortedData("shirt")} >Sleepwear</h3>
                <ul>Nightsuits</ul>
                <ul>Babydolls</ul>
              </div>
            </div>
          </div>
        </div>

        <div className="dropdown">
          <div className="dropbtn">Men Ethic</div>
          <div className="dropdown-content c3">
            <div className="row flex">
              <div className="column">
                <h3 className="productLink" onClick={()=>handleSortedData("shirt")} >Top Wear </h3>
                <ul>All Top Wear</ul>
                <ul>Tshirtsg</ul>
                <ul>Shirts</ul>
              </div>
              <div className="column">
                <h3 className="productLink" onClick={()=>handleSortedData("Jeans")} >Bottom Wear </h3>
                <ul>Track Pants</ul>
                <ul>Jeans</ul>
                <ul>Trousers</ul>
              </div>
              <div className="column">
                <h3 className="productLink" onClick={()=>handleSortedData("shirt")} >Men Accessories </h3>
                <ul>Watches</ul>
                <ul>Belts</ul>
                <ul>Wallets</ul>
                <ul>Bags</ul>
                <ul>Sunglasses</ul>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown">
          <div className="dropbtn">Men Western</div>
          <div className="dropdown-content c4">
            <div className="row flex">
            <div className="column">
                <h3 className="productLink" onClick={()=>handleSortedData("shirt")} >Top Wear </h3>
                <ul>All Top Wear</ul>
                <ul>Tshirtsg</ul>
                <ul>Shirts</ul>
              </div>
              <div className="column">
                <h3 className="productLink" onClick={()=>handleSortedData("shirt")} >Bottom Wear </h3>
                <ul>Track Pants</ul>
                <ul>Jeans</ul>
                <ul>Trousers</ul>
              </div>
              <div className="column">
                <h3 className="productLink" onClick={()=>handleSortedData("shirt")} >Men Accessories </h3>
                <ul>Watches</ul>
                <ul>Belts</ul>
                <ul>Wallets</ul>
                <ul>Bags</ul>
                <ul>Sunglasses</ul>
              </div>
            </div>
          </div>
        </div>

        <div className="dropdown">
          <div className="dropbtn">Kids 0-10 Years</div>
          <div className="dropdown-content c5">
            <div className="row flex">
              <div className="column">
                <h3 className="productLink" onClick={()=>handleSortedData("Soft Toys")} >Toys</h3>
                <ul>Soft Toys</ul>
                <ul>Watches</ul>
                <ul>Shirts</ul>
              </div>
              <div className="column">
                <h3 className="productLink" onClick={()=>handleSortedData("Soft Toys")} >Boys</h3>
                <ul>Track Pants</ul>
                <ul>Jeans</ul>
                <ul>Trousers</ul>
              </div>
              <div className="column">
                <h3 className="productLink" onClick={()=>handleSortedData("shirt")} >Girls</h3>
                <ul>Watches</ul>
                <ul>Belts</ul>
                <ul>Wallets</ul>
                <ul>Bags</ul>
                <ul>Sunglasses</ul>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown">
          <div className="dropbtn">Home & Kitchen</div>
          <div className="dropdown-content c6">
            <div className="row flex">
              <div className="column">
                <h3 className="productLink" onClick={()=>handleSortedData("shirt")} >Home Furnishing</h3>
                <ul>Cleansers</ul>
                <ul>Exfoliating & Peeling</ul>
                <ul>Toners/ Face Mist</ul>
                <ul>Serum & Concentrates</ul>
                <ul>Moisturizers & Treatments</ul>
              </div>
              <div className="column">
                <h3 className="productLink" onClick={()=>handleSortedData("shirt")} >Beauty Products</h3>
                <ul>Lipsticks</ul>
                <ul>Lip Balms & Tints</ul>
                <ul>Lip Gloss</ul>
                <ul>Lip Liner</ul>
                <ul>Lip Guide</ul>
              </div>
              <div className="column">
                <h3 className="productLink" onClick={()=>handleSortedData("shirt")} >EYES Products </h3>
                <ul>Eyeliner/Kajal</ul>
                <ul>Mascara</ul>
                <ul>Eye Shadow</ul>
                <ul>Brows</ul>
                <ul>Eye Shadow Guide</ul>
              </div>
            </div>
          </div>
        </div>

  
        <div className="dropdown">
          <div className="dropbtn">All Products</div>
          <div className="dropdown-content c7">
            <div className="row flex">
              <div className="column">
                <h3 ><Link to="/product" className="productLink">All Products</Link></h3>
                <ul>View All</ul>
                <ul>Tshirtsg</ul>
                <ul>Shirts</ul>
              </div>
             
            </div>
          </div>
        </div>
        <hr/>
      </div> 

      <br/>
    </>
  )
}

export default DropSortCategory

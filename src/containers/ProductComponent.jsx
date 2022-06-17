

import React from "react";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
import './ProductComponents.css'
import { Stack,Rating} from '@mui/material'

const ProductComponent = ({product}) => {
  // const products = useSelector((state) => state.allProducts.products);
 

    //  const renderList =  products.map((product) => {
    const { id, name, img1, price, category ,delivery,reviews,discount, ratings,image   } = product;



    
    return (
      <div className="subBox">
       
        <Link to={`/product/${id}`}>
                    <div className="card" >
                  <div className="image">
                    <img src={img1} alt={name} />
                    {/* <img src={image} alt={name} /> */}
                  </div>
                  <div className="content">
                    <p className="name">{name}</p>
<br/>
                    <div className='flex' >
                      <h2 className='price'>$ {price} </h2>
                      <span className="white">___</span>
                      {/* <h4 className='discount'>$ {category}{discount} | </h4> */}
                     
                      <h4 className="grey"> {(price-discount)/100}% OFF  </h4>
                    </div>
                    <div>
                      {/* <div className="meta price">{delivery} Delivery</div> */}
                      {/* <div>{category}</div> */}
                      <br/>
                    </div>
                    <div className="review">{reviews} Reviews</div>
                    {/* {ratings}  */}
                    <Rating value={Math.floor(ratings)} precision={0.5} size='small' style={{color: 'green'}}   />
                  </div>
                </div>
        </Link>
      </div>
    );
  // }
  // );
  // return <>{renderList}</>;
};

export default ProductComponent;











  
  


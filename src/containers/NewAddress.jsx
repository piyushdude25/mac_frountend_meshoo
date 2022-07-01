import React, { useEffect, useState } from 'react'
import './Address.css'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import axios from "axios";


const NewAddress = () => {

  const [cart, setCart] = useState([]);
// console.log(cart.data.price,"cart")

    const navigate = useNavigate();
    const totalPrice = useSelector((state)=>state.cartReducer.price)
    const totalDiscount = useSelector((state)=>state.cartReducer.totalDiscount)
    const [input, setInput] = useState({
        Address: "",
        Name: "",
        Pincode: "",
        Phone: "",
      });
      const handlecheckout = (e) => {
        const { id, value } = e.target;
        setInput({
          ...input,
          [id]: value,
        });
      };
      const handleSubmit = () => {
        // if (!input.Name || !input.Address || !input.Pincode || !input.Phone) {
        //   alert("Please enter something");
        // }
        // console.log("nnn:",input.Phone.length)
        if(!input.Name){
            alert("name must be greate then 2 letter")
        }
        else if(input.Phone.length<10 || input.Phone.length>10  ){
            alert("phone no. must be 10 digit")
        }
        else if(input.Phone.length< 1 ){
            alert("fill House no./ Building Name")
        }
        else if(input.Phone.length< 1 ){
            alert("fill Pincode")
        }
        
        else {
          axios
            .post("https://db-server-mesho.herokuapp.com/checkout", {
              // .post("https://ecommerce-masai.herokuapp.com/Checkout", {
              name: input.Name,
              Address: input.Address,
              pincode: input.Pincode,
              phone: input.Phone,
            })
            .then(({ data }) => {
                alert("Address fill Successfully")
                console.log("Address fill Successfully to backend")
                navigate("/product/payment");
            })
            .catch((e) => {
              console.log(e.message);
              alert("error")
            });
        }
      };

const AfterDiscountTotal = totalPrice-totalDiscount;


 
    

useEffect(() => {
  handleCartDetail();
}, []);
const handleCartDetail = () => {
  axios
  .get("https://db-server-mesho.herokuapp.com/cartproduct")
  .then(({ data }) => {
    setCart(data);
  });
};

// console.log("price........",cart.price)






  return (
    <>
      <div className='mainBox flex'>
            <div className='leftSide'>
                <h2>Select Delivery Address</h2>
                {/* <form onSubmit={handleSubmit} > */}
                    <div className='flex contact'>
                        <LocalPhoneIcon/>
                        <h3>Contact Details</h3>
                    </div>

                    <input type="text" placeholder='Name *' id="Name"   
                    onChange={handlecheckout}/>
                    <input type="number" placeholder='Phone number *'  id="Phone"
            onChange={handlecheckout}/>

                    <div className='flex contact'>
                        <FmdGoodIcon/>
                        <h3>Address</h3>
                    </div>
                    <input type="text" placeholder='House no./ Building Name *' id="Address" onChange={handlecheckout}/>
                    <input type="text" placeholder='Road Name/ Area/ Colony' id="Address2" />
                    <input type="number" placeholder='Pincode *' id="Pincode" onChange={handlecheckout}/>
                    <div className='flex CSBox'>
                        <input className='city' type="text" placeholder='City' id="City" />
                        <input className='state' type="text" placeholder='State' id="State" />
                    </div>
                    <input type="text" placeholder='Nearby Location (Optional)'/>

                    
                     {/* <Link to='/product/payment' className='linkBtn'>  
                        <button disabled={formdata.length === 0} className='SaveBtn' onClick={handlesubmit} >Save Address & Continue</button>
                     </Link> */}
                     {/* <input className='SaveBtn' type="submit" value="submit" /> */}

                {/* </form> */}

                <button onClick={handleSubmit} className='SaveBtn' >   Submit</button>

            </div>


{/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}
            {/* <div className='rightSide'>
                <h3>Price Details</h3>
                <div className='flex'>
                    <p className='ltitle'>Total Product Price </p>
                    <p className='leftAmount'> $ {totalPrice}</p>
                </div>
                <div className='flex'>
                    <p className='green ltitle'>Meesho Discount </p>
                    <p className='leftAmount green'> -$ {totalDiscount}</p>
                </div>
<hr/>
                <div className='flex'>
                <h3 className='ltitle'>Order Total xxxxxxxxxxxxx</h3>
                <p className='leftAmount'> $ {AfterDiscountTotal}</p>
            </div>
            </div> */}



      </div>
    </>
  )
}

export default NewAddress

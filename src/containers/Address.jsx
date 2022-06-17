import React, { useState } from 'react'
import './Address.css'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Address = () => {

    const totalPrice = useSelector((state)=>state.cartReducer.price)
    const totalDiscount = useSelector((state)=>state.cartReducer.totalDiscount)
//     const state = useSelector((state) => state);
// console.log("state:",state)

// console.log("totalDiscount:",totalDiscount);

const AfterDiscountTotal = totalPrice-totalDiscount;


    const [formdata, setFormdata] = useState("");
    

//     const [input, setInput] = useState({
//     Address: "",
//     Name: "",
//     Pincode: "",
//   });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata({ ...formdata, [name]: value });
        console.log(name, value);

        // console.log("formdata:",formdata.name.length)



        if(name === "name" && value.length <1 ){
            alert("name must be greate then 2 letter");console.log("data",formdata);
        }
        if(name === "phone" && value.length > 10 ){
            alert("phone no. must be 10 digit");console.log("data",formdata);
        }
      };

    const handlesubmit = (e)=> {
    //     e.preventDefault();
    //     if(formdata.phone.value <5){
    //         alert("less no.");console.log("data",formdata);
    //     }
        
    //     console.log("discount:",discount);
       
    }


    const handle = () => {
        if (formdata.name.length ) {
          console.log(formdata.name.length )
        }
    }

  return (
    <>
      <div className='mainBox flex'>
            <div className='leftSide'>
                <h2>Select Delivery Address</h2>
                {/* <form > */}
                    <div className='flex contact'>
                        <LocalPhoneIcon/>
                        <h3>Contact Details</h3>
                    </div>

                    <input type="text" placeholder='Name' name="name"   
                    onChange={handleChange}/>
                    <input type="number" placeholder='Phone number'  name="phone"
            onChange={handleChange}/>

                    <div className='flex contact'>
                        <FmdGoodIcon/>
                        <h3>Address</h3>
                    </div>
                    <input type="text" placeholder='House no./ Building Name'/>
                    <input type="text" placeholder='Road Name/ Area/ Colony'/>
                    <input type="number" placeholder='Pincone'/>
                    <div className='flex CSBox'>
                        <input className='city' type="text" placeholder='City'/>
                        <input className='state' type="text" placeholder='State'/>
                    </div>
                    <input type="text" placeholder='Nearby Location (Optional)'/>

                    
                     <Link to='/product/payment' className='linkBtn'>  
                        <button disabled={formdata.length === 0} className='SaveBtn' onClick={handlesubmit} >Save Address & Continue</button>
                     </Link>
                     {/* <input className='SaveBtn' type="submit" value="Save Address & Continue" /> */}

                {/* </form> */}


                {/* <button disabled={formdata.length === 0}>  try </button> */}
                {/* <button disabled={handle}>  try </button> */}
                 {/* <button onClick={handle}>  try </button>  */}

            </div>


{/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}
            <div className='rightSide'>
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
                <h3 className='ltitle'>Order Total </h3>
                <p className='leftAmount'> $ {AfterDiscountTotal}</p>
            </div>
            </div>



      </div>
    </>
  )
}

export default Address

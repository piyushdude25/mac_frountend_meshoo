// import React, { useState } from 'react'
// import { useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'
// import './Payment.css'
// import { useNavigate } from "react-router-dom";

// const Payment = () => {

//     const navigate = useNavigate();
//     const totalPrice = useSelector((state)=>state.cartReducer.price)
//     const totalDiscount = useSelector((state)=>state.cartReducer.totalDiscount)
//     const AfterDiscountTotal = totalPrice-totalDiscount;

//     const [formdata, setFormdata] = useState("");

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormdata({ ...formdata, [name]: value });
//         // console.log(name, value);

//         // console.log("formdata:",formdata.name.length)



//         if(name === "name" && value.length <1 ){
//             alert("name must be greate then 2 letter");console.log("data",formdata);
//         }
//         if(name === "phone" && value.length > 10 ){
//             alert("phone no. must be 10 digit");console.log("data",formdata);
//         }
//       };

//       const handlesubmit = (e)=> {
       
//         e.preventDefault();
//         const { name ,phone, card, date, cvv} = e.target;
        
//         if(name.value.length<=2 ){
//             alert("name must be greate then 2 letter")
//         }
//         else if(phone.value.length<10 || phone.value.length>10  ){
//             alert("phone no. must be 10 digit")
//         }
//         else if(card.value.length < 13 || card.value.length > 16){
//             alert("Card Number between 13-16")
//         }
//         else if(date.value.length < 1 ){
//             alert("fill the Date")
//         }
//         else if(cvv.value.length !== 3 ){
//             alert("CVV must be 3 digit")
//         }
//         else{
            
//             alert("Payment Success $" +AfterDiscountTotal)
//             navigate("/success");
//         }
//         // console.log("n:",name.value.length);
       
//     }




//   return (
//     <>
//       <div className='mainBox flex'>
//             <div className='leftSide'>
//                 <h2>Select Payment Method</h2>
//                 <p>All transactions are safe and secure</p>
//                 <hr/>
//                 <form onSubmit={handlesubmit} >
//                     <div className='flex contact'>
//                     <input type="checkbox" className='radioBtn' required />

                    

//                         <h3 className=''>Credit/Debit Card</h3>
//                     </div>



//                     <input type="text" placeholder='Card Holder Name' name="name"   
//                     onChange={handleChange}/>
//                     <input type="number" placeholder='Phone number'  required name="phone"/>

                   

//                     <input type="number" placeholder='Card Number'  required name="card"/>
                    
                    
//                     <div className='flex CSBox'>
//                         <input className='city' type="date" placeholder='MM / YY' required name="date"/>
//                         <input className='state' type="password" placeholder='CVV' required name="cvv" />
//                     </div>
                    

// {/* -------- */}
//                     <div className='flex contact'>
//                     <input type="checkbox" className='radioBtn'/>
//                         <h3 className=''>Cash on Delivery</h3>
//                     </div>
                    
                    
//                     {/* <Link to='/success'>
//                         <button disabled={formdata.length === 0} className='SaveBtn' onClick={handleSubmit} >Place Order</button>
//                     </Link> */}
//                     <input disabled={formdata.length === 0} className='SaveBtn' type="submit" value="submit" />
                   
//                 </form>
               
//             </div>


// {/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}
//             <div className='rightSide'>
//                 <h3>Price Details</h3>
//                 <div className='flex'>
//                     <p className='ltitle'>Total Product Price </p>
//                     <p className='leftAmount'> $ {totalPrice}</p>
//                 </div>
//                 <div className='flex'>
//                     <p className='green ltitle'>Meesho Discount </p>
//                     <p className='leftAmount green'> -$ {totalDiscount}</p>
//                 </div>
// <hr/>
//                 <div className='flex'>
//                 <h3 className='ltitle'>Order Total </h3>
//                 <p className='leftAmount'> $ {AfterDiscountTotal}</p>
//             </div>
//             </div>



//       </div>

//     </>
//   )
// }

// export default Payment










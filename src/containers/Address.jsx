// import React, { useEffect, useState } from 'react'
// import './Address.css'
// import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
// import FmdGoodIcon from '@mui/icons-material/FmdGood';
// import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { useNavigate } from "react-router-dom";
// import axios from "axios";


// const Address = () => {

//     const [cart, setCart] = useState([]);
//     const navigate = useNavigate();
//     const totalPrice = useSelector((state)=>state.cartReducer.price)
//     const totalDiscount = useSelector((state)=>state.cartReducer.totalDiscount)
// //     const state = useSelector((state) => state);
// // console.log("state:",state)

// // console.log("totalDiscount:",totalDiscount);

// const AfterDiscountTotal = totalPrice-totalDiscount;


//     const [formdata, setFormdata] = useState("");
    

// //     const [input, setInput] = useState({
// //     Address: "",
// //     Name: "",
// //     Pincode: "",
// //   });

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

//     const handlesubmit = (e)=> {
       
//         e.preventDefault();
//         const { name ,phone, address1, address2, pin, city, state} = e.target;
        
//         if(name.value.length<=2 ){
//             alert("name must be greate then 2 letter")
//         }
//         else if(phone.value.length<10 || phone.value.length>10  ){
//             alert("phone no. must be 10 digit")
//         }
//         else if(address1.value.length < 1 ){
//             alert("fill House no./ Building Name")
//         }
//         else if(address2.value.length < 1 ){
//             alert("fill Road Name/ Area/ Colony")
//         }
//         else if(pin.value.length < 1 ){
//             alert("fill Pincode")
//         }
//         else if(city.value.length < 1 ){
//             alert("fill City")
//         }
//         else if(state.value.length < 1 ){
//             alert("fill State")
//         }
//         // else{
            
//         //     alert("Address filled successfully")
//         //     navigate("/product/payment");
//         // }
//         // console.log("n:",name.value.length);

//         else {
//             axios
//               .post("http://localhost:8001/checkout", {
//                 name: name,
//                 Address: address1,
//                 pincode: pin,
//                 phone: phone,
//               })
//               .then(({ data }) => {
//                 alert("Address filled successfully")
//                 navigate("/product/payment");
//               })
//               .catch((e) => {
//                 console.log(e.message);
//                 alert("something is wrong")
//               });
//           }
       
//     }


//     useEffect(() => {
//         handleCartDetail();
//       }, []);
//       const handleCartDetail = () => {
//         axios
//         .get("https://my-json-server-masai.herokuapp.com/cartproduct")
//         .then(({ data }) => {
//           setCart(data);
//         });
//       };

// console.log("price........",cart.price)

//   return (
//     <>
//       <div className='mainBox flex'>
//             <div className='leftSide'>
//                 <h2>Select Delivery Address</h2>
//                 <form onSubmit={handlesubmit} >
//                     <div className='flex contact'>
//                         <LocalPhoneIcon/>
//                         <h3>Contact Details</h3>
//                     </div>

//                     <input type="text" placeholder='Name' name="name"   
//                     onChange={handleChange}/>
//                     <input type="number" placeholder='Phone number'  name="phone"
//             onChange={handleChange}/>

//                     <div className='flex contact'>
//                         <FmdGoodIcon/>
//                         <h3>Address</h3>
//                     </div>
//                     <input type="text" placeholder='House no./ Building Name' name="address1"  />
//                     <input type="text" placeholder='Road Name/ Area/ Colony' name="address2" />
//                     <input type="number" placeholder='Pincode' name="pin" />
//                     <div className='flex CSBox'>
//                         <input className='city' type="text" placeholder='City' name="city" />
//                         <input className='state' type="text" placeholder='State' name="state" />
//                     </div>
//                     <input type="text" placeholder='Nearby Location (Optional)'/>

                    
//                      {/* <Link to='/product/payment' className='linkBtn'>  
//                         <button disabled={formdata.length === 0} className='SaveBtn' onClick={handlesubmit} >Save Address & Continue</button>
//                      </Link> */}
//                      <input disabled={formdata.length === 0} className='SaveBtn' type="submit" value="submit" />

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

// export default Address

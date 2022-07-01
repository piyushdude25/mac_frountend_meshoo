import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './Payment.css'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import {
    Box,
    FormControl,
    FormLabel,
    FormControlLabel,
    RadioGroup,
    Radio,
  } from "@mui/material";
  

const NewPayment = () => {

    const navigate = useNavigate();
    const totalPrice = useSelector((state)=>state.cartReducer.price)
    const totalDiscount = useSelector((state)=>state.cartReducer.totalDiscount)
    const AfterDiscountTotal = totalPrice-totalDiscount;

    const [formdata, setFormdata] = useState("");

    const [userDetail, setUserDetails] = useState({});
    // console.log(userDetail, "user");

    const [input, setInput] = useState({
      CardName: "",
      CardNum: "",
      Date: "",
      Cvv: "",
    });
    const handleChange = (e) => {
      const { id, value } = e.target;
      setInput({
        ...input,
        [id]: value,
      });
    };
    const handleSubmit = () => {
            if(input.CardName.length<=2 ){
                alert("name must be greate then 2 letter")
            }
            else if(input.CardNum.length < 13 || input.CardNum.length > 16){
                alert("Card Number between 13-16")
            }
            else if(input.Date.length < 1 ){
                alert("fill the Date")
            }
            else if(input.Cvv.length !== 3 ){
                alert("CVV must be 3 digit")
            }
      
             else {
            axios
          .post("https://db-server-mesho.herokuapp.com/payment", {
            card_name: input.CardName,
            card_num: input.CardNum,
            date: input.Date,
            cvv: input.Cvv,
          })
          .then(({ data }) => {
              console.log("Payment Successfully")
              // alert("Payment Success $" +AfterDiscountTotal)
              alert("Payment Success")
            navigate("/success");
          })
          .catch((e) => {
            console.log(e.message);
            alert("error")
          });
      }
    };
    const handleUserDetails =() => {
        axios.get("https://db-server-mesho.herokuapp.com/checkout")
        .then(({data})=> {
            setUserDetails(data)
        })
    }

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormdata({ ...formdata, [name]: value });
    //     // console.log(name, value);

    //     // console.log("formdata:",formdata.name.length)



    //     if(name === "name" && value.length <1 ){
    //         alert("name must be greate then 2 letter");console.log("data",formdata);
    //     }
    //     if(name === "phone" && value.length > 10 ){
    //         alert("phone no. must be 10 digit");console.log("data",formdata);
    //     }
    //   };

    //   const handlesubmit = (e)=> {
       
    //     e.preventDefault();
    //     const { name ,phone, card, date, cvv} = e.target;
        
    //     if(name.value.length<=2 ){
    //         alert("name must be greate then 2 letter")
    //     }
    //     else if(phone.value.length<10 || phone.value.length>10  ){
    //         alert("phone no. must be 10 digit")
    //     }
    //     else if(card.value.length < 13 || card.value.length > 16){
    //         alert("Card Number between 13-16")
    //     }
    //     else if(date.value.length < 1 ){
    //         alert("fill the Date")
    //     }
    //     else if(cvv.value.length !== 3 ){
    //         alert("CVV must be 3 digit")
    //     }
    //     else{
            
    //         alert("Payment Success $" +AfterDiscountTotal)
    //         navigate("/success");
    //     }
    //     // console.log("n:",name.value.length);
       
    // }

useEffect(()=>{handleUserDetails()},[])


  return (
    <>
      <div className='mainBox flex'>
            <div className='leftSide'>
                <h2>Select Payment Method</h2>

                <div>
                    <h4>Name: {userDetail[userDetail.length - 1]?.name} </h4>
                    <h4>Address: {userDetail[userDetail.length - 1]?.Address} </h4>
                    <h4>PinCode: {userDetail[userDetail.length - 1]?.pincode} </h4>
                    <h4>Phone No.: {userDetail[userDetail.length - 1]?.phone} </h4>
                </div>


<br /><br />
                <p>All transactions are safe and secure</p>
                <hr/>
               
                    
              <Box>
                <RadioGroup>
                  <div style={{ lineHeight: "5px" }}>
                    <FormControlLabel
                      control={<Radio color="default" />}
                      label="Credit/Debit Card"
                      value="priority"
                    />

                  
                     <input type="text" placeholder='Card Holder Name' id="CardName"   
                    onChange={handleChange}/>
                   

                   

                    <input type="number" placeholder='Card Number'  id="CardNum" onChange={handleChange}/>
                    
                    
                    <div className='flex CSBox'>
                        <input className='city' type="date" placeholder='MM / YY' required id="Date" onChange={handleChange} />
                        <input className='state' type="password" placeholder='CVV' required id="Cvv" onChange={handleChange} />
                    </div>
                    
                  
                  </div>
                  <div>
                    <FormControlLabel
                      control={<Radio color="default" />}
                      label="Cash on Delivery"
                      value="Standard"
                    />
                
                  </div>
                  {/* <div>
                    <FormControlLabel
                      control={<Radio color="default" />}
                      label="Schedule"
                      value="Schedule" />
                  </div> */}
                </RadioGroup>
              </Box>

                 
                    {/* <input disabled={formdata.length === 0} className='SaveBtn' type="submit" value="submit" /> */}
                   
              
                <button onClick={handleSubmit} className='SaveBtn'>   Submit</button>
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
                <h3 className='ltitle'>Order Total </h3>
                <p className='leftAmount'> $ {AfterDiscountTotal}</p>
            </div>
            </div> */}



      </div>

    </>
  )
}

export default NewPayment










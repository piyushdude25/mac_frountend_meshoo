import React from 'react'
import { Link } from 'react-router-dom'
import "./SuccessPage.css"
import { useNavigate } from "react-router-dom";

const SuccessPage = () => {

  const navigate = useNavigate();


const gobacktoHome = ()=> {
  navigate("/");
  window.location.reload();
}

  return (
    <div className='successBox'>
     
      <h1 onClick={gobacktoHome} >Payment Successful </h1>
      <Link  to="/product"><img className="imgS" src="https://steemitimages.com/0x0/https://cdn.dribbble.com/users/571236/screenshots/2888472/happystate.gif" alt="" />
      <p>continue shopping..</p>
      </Link>
      
    </div>
  )
}

export default SuccessPage

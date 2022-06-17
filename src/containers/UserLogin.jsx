import React, { useState } from 'react'
import "./UserLogin.css"
import {Switch} from "antd"
import { Link } from 'react-router-dom'
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LoginIcon from '@mui/icons-material/Login';

const UserLogin = () => {

    const [toggle, setToggle] = useState(false);

    const toggler = () => {
        toggle ? setToggle(false) : setToggle(true)
    }


  return (
    <>

    
    <button onClick={toggler} className="toggleBtn"> {
        toggle ? <div> <div><HowToRegIcon/></div><div><Link to="/signup" ><p className="hoverWhite">SignUp</p></Link></div></div>
               : <div> <LoginIcon/><div><Link to="/login"><p className="hoverWhite">LogIn</p></Link></div></div>          
    }
      </button>

       {/* <button onClick={toggler} className="toggleBtn"> {
        toggle ? <div> <div><HowToRegIcon/></div><div><Link to="/tsignup" ><p className="hoverWhite">SignUp</p></Link></div></div>
               : <div> <LoginIcon/><div><Link to="/tlogin"><p className="hoverWhite">LogIn</p></Link></div></div>      
    }
      </button> */}
   
        

    </>
  )
}

export default UserLogin

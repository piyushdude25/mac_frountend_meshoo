import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './SignUp.css'

const SignUp = () => {
  const navigate = useNavigate();
  
  const [formdata, setFormdata] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    //console.log(name, value);
    setFormdata({ ...formdata, [name]: value });
  };
  
  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log("data", formdata);
    await axios.post("https://meesho-website-clone.herokuapp.com/register", formdata);
    alert("registration successfully");
    navigate("/login");
  };

  return (
    <>
     <div className='mainBoxxx'>
          <div className='subBoxxx'>
              <h1>New Account</h1>
              <form onSubmit={handlesubmit}  className='form'>

                <input type="text" placeholder='Full Name'  
            name="name"
            onChange={handleChange}/>
                <input type="email" placeholder='Email' 
            name="email"
            onChange={handleChange}/>
                <input type="password" placeholder='Password'  
            name="password" 
            onChange={handleChange}/>
            <input type="text" placeholder='Role'  
            name="role" 
            onChange={handleChange}/>

            <input type="number" placeholder='Phone No.'  
            name="contact" 
            onChange={handleChange}/>

                <input className="btn" type="submit" value="submit" />
              </form>
          </div>
     </div> 
    </>
  )
}

export default SignUp
 
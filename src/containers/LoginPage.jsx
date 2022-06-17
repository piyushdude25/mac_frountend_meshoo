import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './SignUp.css'

export const LoginPage = () => {
  const navigate = useNavigate();

  
  const [formdata, setFormdata] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    //console.log(name, value);
    setFormdata({ ...formdata, [name]: value });
  };
  
  const handlesubmitL = async (e) => {
    e.preventDefault();
    console.log("data", formdata);
    const res = await axios.post(
      "https://meesho-website-clone.herokuapp.com/login",
      formdata
    )

    .then(({ data }) => {
      alert("login successfully");
      console.log("login success...");
     setTimeout(()=>{
      localStorage.setItem("token", data.token);
      navigate("/product")
     },1000)

    })
    .catch((err) => {
      alert("Email and Password are invalid");
      // console.log("err:",res.data.message);
      console.log(err)
    });
  };

  return (
    <>
    
<div className='mainBoxxx'>
      <div className='subBoxxx'>
              <h1>Back to Account</h1>
              <form onSubmit={handlesubmitL} className='form'>
                
                <input type="email" placeholder='Email' 
            name="email"
            onChange={handleChange}/>
                <input type="password" placeholder='Password' 
            name="password"
            onChange={handleChange}/>
                <input className="btn" type="submit" value="submit" />
              </form>
          </div>

          </div>
    </>
  );
};

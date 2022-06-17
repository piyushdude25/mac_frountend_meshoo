import React from 'react'


import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link, useNavigate } from "react-router-dom";
import './HomeBottom.css'




import Carousel from "react-elastic-carousel"
import DropSortCategory from './DropSortCategory';
// import Item from './Item'



const HomeBottom = () => {

  const breakPoint = [
    // {width:1,itemToShow:1},
    // {width:1000,itemToShow:2},
    // {width:768,itemToShow:3},
    // {width:1200,itemToShow:4},
  ]
  
  const navigate = useNavigate();

  const gotoRegistration=()=> {
    navigate("/signup")
  }

  return (
    <>
  
{/* ///////////////////dropdown start /////////// */}

{/* <Link to='/login'> */}


<div onClick={gotoRegistration}>
  <DropSortCategory/>
</div>

      
{/* <<<<<<<<<<<<<<<   B Start     >>>>>>>>>>>>>>>>.>>>>></> */}
<div className='HomeBottom'>
  <br/>
          {/* ....................................... */}
          {/* <Link to="/signup"> </Link>
          <div onClick={gotoRegistration}>
            goto
          </div> */}
          
          <div className='img3Div' onClick={gotoRegistration}>
            <h1>Top Categories to choose from</h1>
            {/* <Link to="/signup"> */}
            <div className='flex img3' onClick={gotoRegistration}>
           
              <img src='https://images.meesho.com/images/marketing/1649760442043.webp' alt=''/>
              <img src='https://images.meesho.com/images/marketing/1649759799809.webp' alt=''/>
              <img src='https://images.meesho.com/images/marketing/1649760423313.webp' alt=''/>
             
            </div> 
            {/* </Link> */}
          </div>
       
{/* ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,...................... */}
<br/><br/><br/>


      <div className='scrolling_img_box' onClick={gotoRegistration}>
        <Carousel breakPoint={breakPoint}>
          <span><img className='scroling_img'  src='https://tse2.mm.bing.net/th?id=OIP.-NRNT00hq9n3QxDydjegkgHaEK&pid=Api&P=0&w=279&h=157' alt=''/></span>
          <span><img className='scroling_img' src='https://tse2.mm.bing.net/th?id=OIP._qP_6OyYK9LC-O3zfmHw9wHaEK&pid=Api&P=0&w=279&h=157' alt=''/></span>
          <span><img className='scroling_img' src='https://tse2.mm.bing.net/th?id=OIP.JyUXoDOi-aPEWq4UtYTcDgHaEK&pid=Api&P=0&w=317&h=178' alt=''/></span>
          <span><img className='scroling_img' src='https://tse1.mm.bing.net/th?id=OIP.f5aU5ug9CoSgqCnyzhB35QHaEK&pid=Api&P=0&w=283&h=159' alt=''/></span>
           
        </Carousel>
      </div>  

      {/* <Link to="/signup"> */}
        <div className='img1' onClick={gotoRegistration}>
    <img src='https://images.meesho.com/images/pow/download_banner_desktop.webp' alt=''/>
    </div>
    {/* </Link> */}

<br/><br/><br/>
 
<div className='img3Div' onClick={gotoRegistration}>
            <h1>Top Categories to choose from</h1>
            {/* <Link to="/signup"> */}
            <div className='flex img3'>
             
              <img src='https://images.meesho.com/images/marketing/1649760423313.webp' alt=''/>
              <img src='https://images.meesho.com/images/marketing/1649760442043.webp' alt=''/>
              <img src='https://images.meesho.com/images/marketing/1649759799809.webp' alt=''/>
            </div>
            {/* </Link> */}
 </div>
          <br/><br/><br/>
 <div className='img3Div' onClick={gotoRegistration}>
            <h1>Top Categories to choose from</h1>
            {/* <Link to="/signup"> */}
            <div className='flex img3'>
            <img src='https://images.meesho.com/images/marketing/1649759799809.webp' alt=''/>
              <img src='https://images.meesho.com/images/marketing/1649760423313.webp' alt=''/>
              
              <img src='https://images.meesho.com/images/marketing/1649760442043.webp' alt=''/>
            </div>
            {/* </Link> */}
 </div>
          <br/><br/><hr/><br/><br/>

<div className='flex x' >

    <div className='a'>
        <h1>Shop Non-Stop on Meesho</h1>
        <p>Trusted by more than 1 Crore Indians Cash on Delivery | Free Delivery</p>

    </div>
    <div className='b'>
        <p>Careers</p>
        <p>Become a supplier</p>
        <p>Our Influencer Program</p>
        <p>Hall of Fame</p>
        
    </div>
    <div className='c'>
        <p>Legal and Policies</p>
        <p>Meesho Tech Blog</p>
        <p>Notices and Returns</p>
        <p>Hall of Fame</p>
        
    </div>
    <div className='d'>
        <h3>Reach out to us</h3>
        <FacebookIcon/>
        <InstagramIcon/>
        <LinkedInIcon/>
        <YouTubeIcon/>
        <TwitterIcon/>
        
    </div>
    <div className='e'>
        <h3>Contact Us</h3>
        <p>Fashnear Technologies Private Limited,
CIN: U74900KA2015PTC082263
06-105-B, 06-102, (138 Wu) Vaishnavi Signature, No. 78/9, Outer Ring Road, Bellandur, Varthur Hobli, Bengaluru-560103, Karnataka, India
E-mail address: query@meesho.com
© 2015-2022 Meesho.comr</p>
        
        
    </div>

</div>

{/* ................................................................ */}
</div>
{/* <<<<<<<<<<<<<<<  B End    >>>>>>>>>>>>>>>>.>>>>></> */}
{/* </Link> */}
    </>
  )
}

export default HomeBottom

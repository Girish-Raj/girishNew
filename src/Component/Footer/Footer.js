import React from 'react'
import "./Footer.css"
import CopyrightIcon from '@mui/icons-material/Copyright';
const Footer = () => {
  return (
    <div  className='footer-container'>
        <div className='footer-wrapper'>
            <div className='policy'>
                <div className='copyright'>
                    <CopyrightIcon style={{width : "17px"}}/>
                    <h3 style={{color : 'black'}}> 2016 -2024 Bloomberg Exam Prep </h3>
                </div>
                <h3>Terms of Service</h3>
                <h3>Privacy Policy</h3>
                <h3>Contact Us</h3>

            </div>


            <div className='footer-bottom'>
           <div className='assurity'>
            <p>CFA Institute does not endorse, promote, or warrant the accuracy or quality of the products or services offered by Bloomberg Prep. CFA® and Chartered Financial Analyst® are registered trademarks owned by CFA Institute.</p>
           </div>
           <div className='companany'>
            <h2>Powdered by</h2>
            <h1>mindojo</h1>
           </div>

            </div>
        </div>
    </div>
  )
}

export default Footer
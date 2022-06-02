import React from 'react'
import { Link } from 'react-router-dom'
import "./Services.css"

import gmail from "../home/resorses/gmail (1).png";
import instagram from "../home/resorses/instagram (1).png";
import linkedin from "../home/resorses/linkedin (1).png";
import phone from "../home/resorses/phone-call.png";
function Service() {
  return (
    <div>
    <div className='about'>
        <ul className="d-flex list-unstyled list">
        <div className="list1 my-1">
          
            <Link to="/Nikhil_resume" className="link">
          <li className=" listitem">
            Home
            <div className=" underline"></div>
          </li>
            </Link> 
            <Link to="/about" className="link">
          <li className=" listitem ms-3 ">
            About <div className="underline"></div>
          </li>
            </Link> 
            <Link to="/services" className="link">
          <li className=" listitem1 ms-3">
            Service <div className="underline1"></div>
          </li>
            </Link> 
            <Link to="/about" className="link">
          <li className="listitem ms-3">
            Contact <div className="underline"></div>
          </li>
            </Link> 
        </div>
        {/* </ul> */}
        {/* <ul className="d-flex pt-1 list-unstyled"> */}
        <div className="list2">
          <li>
            <a href="mailto:nikhileshramoliya@gmail.com ">
              <img className="icon2 ms-0 mx-2" src={gmail} alt="" />
            </a>
            <a href="Tel: +918469175299" >
              <img className="icon1 mx-2" src={phone} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/nikhileshramoliya/">
              <img className="icon1 mx-2" src={linkedin} alt="" />
            </a>
            <a href="https://www.instagram.com/niks.patel25/">
              <img className="icon1 mx-2" src={instagram} alt="" />
            </a>
          </li>
        </div>
        </ul>
      </div>
    </div>
  )
}

export default Service
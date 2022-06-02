import React from "react";
import gmail from "../home/resorses/gmail (1).png";
import instagram from "../home/resorses/instagram (1).png";
import linkedin from "../home/resorses/linkedin (1).png";
import phone from "../home/resorses/phone-call.png";
import {Link} from 'react-router-dom';
function Header(props) {
  return (
    <div className="container-fluid  border-white mx-auto col-10" >
      <h1 className="text-opacity-25 fw-bolder">Nikhil Ramoliya</h1>
      <p className="fs-5 fw-semibold">
        <span>I'm Living for</span>{" "}
        <span className=" learn">learn and explore</span>{" "}
        <span>as much I can . </span>
      </p>
      <div >
        <ul className="d-flex list-unstyled">
            <Link to="/Nikhil_resume" className="link">
          <li className=" listitem1">
            Home
            <div className=" underline1"></div>
          </li>
            </Link> 
            <Link to="/Nikhil_resume/about" className="link">
          <li className=" listitem ms-3 ">
            About <div className="underline"></div>
          </li>
            </Link> 
            <Link to="/Nikhil_resume/about" className="link">
          <li className=" listitem ms-3">
            Service <div className="underline"></div>
          </li>
            </Link> 
            <Link to="/Nikhil_resume/about" className="link">
          <li className="listitem ms-3">
            Contact <div className="underline"></div>
          </li>
            </Link> 
        </ul>
        <ul className="d-flex pt-1 list-unstyled">
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
        </ul>
      </div>
    </div>
  );
}

export default Header;

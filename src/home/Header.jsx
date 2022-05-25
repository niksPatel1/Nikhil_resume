import React from "react";
import gmail from "../home/resorses/gmail (1).png";
import instagram from "../home/resorses/instagram (1).png";
import linkedin from "../home/resorses/linkedin (1).png";
import phone from "../home/resorses/phone-call.png";

function Header() {
  return (
    <div className="container-fluid  border-white mx-auto col-10">
      <h1 className="text-opacity-25 fw-bolder">Nikhil Ramoliya</h1>
      <p className="fs-5 fw-semibold">
        <span>I'm Living for</span>{" "}
        <span className=" learn">learn and explore</span>{" "}
        <span>as much I can . </span>
      </p>
      <div className="">
        <ul className="d-flex list-unstyled">
          <li className=" listitem">
            Home <div className=" underline1"></div>
          </li>
          <li className=" listitem ms-3 ">
            About <div className="underline"></div>
          </li>
          <li className=" listitem ms-3">
            Service <div className="underline"></div>
          </li>
          <li className="listitem ms-3">
            Contact <div className="underline"></div>
          </li>
        </ul>
        <ul className="d-flex pt-3 list-unstyled">
          <li className=" icon1 d-flex justify-content-center align-content-center">
            <img src={gmail} alt="" />
          </li>
          <li className="ms-4 icon1 d-flex justify-content-center align-content-center">
            <img src={instagram} alt="" />
          </li>
          <li className="ms-4 icon1 d-flex justify-content-center align-content-center">
            <img src={linkedin} alt="" />
          </li>
          <li className="ms-4  icon1 d-flex justify-content-center align-content-center">
            <img src={phone} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;

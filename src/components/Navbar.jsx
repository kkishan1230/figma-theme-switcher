import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../images/logo.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import toggle from "../images/toggle.svg";

const Navbar = () => {
  //
  return (
    <div className="text-white flex items-center justify-between pt-[73px] px-[165px] navbar lg:px-[40px] md:px-[25px] md:pt-[31px]">
      <nav className="links flex items-center gap-10 lg:hidden">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/product">Product</NavLink>
        <NavLink to="/pricing">Pricing</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/" className="company-logo ml-1">
          <img src={Logo} alt="conpany-logo" />
        </NavLink>
      </nav>
      <div className="icons flex gap-8 lg:hidden">
        <TwitterIcon className="icon" fontSize="large" />
        <FacebookIcon className="icon" fontSize="large" />
        <LinkedInIcon className="icon" fontSize="large" />
      </div>
      <div className="hidden lg:flex items-center w-[100%] justify-between">
        <NavLink to="/" className="company-logo ml-1 ">
          <img src={Logo} alt="conpany-logo" />
        </NavLink>
        <NavLink to="/" className="toggle">
          <img src={toggle} alt="" />
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;

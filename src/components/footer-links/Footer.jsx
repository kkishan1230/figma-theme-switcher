import React from "react";
import FooterLinks from "./FooterLinks";
import pin_location from "../../images/map_white.svg";
import phone from "../../images/phone_white.svg";
import twitter from "../../images/twitter_white.svg";
import fb from "../../images/fb_white.svg";
import linked from "../../images/in_white.svg";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="py-[150px] bg-[#252B42]">
      <div className="max-w-[991px] flex justify-between mx-auto lg:max-w-[680px]">
        <FooterLinks
          links_head="Pages"
          link1="Home"
          link2="Product"
          link3="Pricing"
          link4="About"
          link5="Contact"
        />
        <FooterLinks
          className="tomothy"
          links_head="Tomothy"
          link1="Eleanor Edwards"
          link2="Ted Robertson"
          link3="Annette Russell"
          link4="Jennie Mckinney"
          link5="Gloria Richards"
        />
        <FooterLinks
          className="jane"
          links_head="Jane Black"
          link1="Philip Jones"
          link2="Product"
          link3="Colleen Russell"
          link4="Marvin Hawkins"
          link5="Bruce Simmmons"
        />
        <div className="pl-[50px]">
          <div className="flex items-center gap-4 ml-[-5px]">
            <div className="w-[40px]">
              <img src={pin_location} alt="" />
            </div>
            <p className="footer_links">7480 Mockingbird Hill undefined</p>
          </div>
          <div className="flex items-center gap-4 mt-[21px]">
            <div className="w-[20px]">
              <img src={phone} alt="" />
            </div>
            <p className="footer_links">(239) 555-0108</p>
          </div>
          <div className="flex gap-[33px] mt-[42px] items-center">
            <NavLink to="/">
              <img src={twitter} alt="" />
            </NavLink>
            <NavLink to="/">
              <img src={fb} alt="" />
            </NavLink>
            <NavLink to="/">
              <img src={linked} alt="" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

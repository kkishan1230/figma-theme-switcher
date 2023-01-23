import React from "react";
import pin_location from "../images/pin_location.svg";
import phone from "../images/phone.svg";
import letter from "../images/letter.svg";
import twitter from "../images/twitter.svg";
import fb from "../images/fb.svg";
import linked from "../images/linkedIn.svg";

const ContactUs = () => {
  return (
    <div className="container-1440 pt-[213px] pb-[102px]">
      <h2 className="text-center">Contact Us</h2>
      <p className="tag-line w-[532px] mt-[27px] mb-[60px] mx-auto text-center">
        Most calendars are designed for teams. Slate is designed for freelancers
      </p>
      <div className="flex max-w-[1228px] mx-auto justify-between">
        <div className="w-[36.89%] px-[50px] py-[52px] flex flex-col gap-[45px] form rounded-[20px]">
          <h3>Contact Us</h3>
          <input
            type="text"
            placeholder="Your Name"
            className=" h-[54px] py-[19px] px-[20px] rounded-[39px] border-solid border-[1px] border-[#E8E8E8] font-Roboto placeholder:text-[#18171D] bg-[#F4F4F4]"
          />
          <input
            type="text"
            placeholder="Your Email"
            className=" h-[54px] py-[19px] px-[20px] rounded-[39px] border-solid border-[1px] border-[#E8E8E8] font-Roboto placeholder:text-[#18171D] bg-[#F4F4F4]"
          />
          <textarea
            type="text"
            placeholder="Your Message"
            className=" h-[193px] py-[23px] px-[20px] border-solid border-[1px] border-[#E8E8E8] font-Roboto placeholder:text-[#18171D] bg-[#F4F4F4]"
          />
          <button className="btn h-[56px] w-[145px] rounded-[35px]">
            Send
          </button>
        </div>
        <div className="flex flex-col justify-between  pt-[29px] pb-[43px]">
          <div className="flex items-center gap-[35px]">
            <div className="">
              <div className="w-[25px] mx-auto ">
                <img src={pin_location} alt="" />
              </div>
              <p className="common-text max-w-[313px] text-center mt-[21px]">
                6386 Spring St undefined Anchorage, Georgia 12473 United States
              </p>
            </div>
            <div className="">
              <div className="w-[21px] mx-auto">
                <img src={phone} alt="" />
              </div>
              <p className="common-text  text-center mt-[21px]">
                (843) 555-0130
              </p>
            </div>
            <div className="">
              <div className="w-[26px] mx-auto">
                <img src={letter} alt="" />
              </div>
              <p className="common-text text-center mt-[21px]">
                willie.jennings@example.com
              </p>
            </div>
          </div>
          <div>Map</div>
          <div className="flex items-center">
            <div className="w-[33px]">
              <img src={twitter} alt="" />
            </div>
            <div className="w-[32px] ml-[32px]">
              <img src={fb} alt="" />
            </div>
            <div className="w-[32px] ml-[33px]">
              <img src={linked} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

import React from "react";
import pin_location from "../images/pin_location.svg";
import phone from "../images/phone.svg";
import letter from "../images/letter.svg";
import twitter from "../images/twitter.svg";
import fb from "../images/fb.svg";
import linked from "../images/linkedIn.svg";

const ContactUs = () => {
  return (
    <div className="max-w-[1440px] mx-auto pt-[213px] pb-[102px] lg:max-w-[680px] xl2:max-w-[1100px] xl2:pt-[100px] sm:pt-[160px] sm:pb-[149px]">
      <h2 className="text-center">Contact Us</h2>
      <p className="tag-line w-[532px] mt-[27px] mb-[60px] mx-auto text-center sm:max-w-[265px]">
        Most calendars are designed for teams.
        <span className="sm:hidden">Slate is designed for freelancers.</span>
      </p>
      <div className="flex max-w-[1228px] mx-auto justify-between lg:flex-col-reverse lg:max-w-[600px] xl2:max-w-[1100px] sm:max-w-[378px] ">
        <div className="w-[36.89%] px-[50px] py-[52px] flex flex-col gap-[45px] form rounded-[20px] lg:w-[100%] lg:p-12 xl2:p-7 xl2:gap-[20px] sm:py-[52px] sm:mt-[78px] sm:gap-[45px]">
          <h3 className="text-center">Contact Us</h3>
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
        <div className="flex flex-col justify-between  pt-[29px] pb-[43px] sm:flex-col-reverse sm:pt-[15px]  sm:max-w-[358px] sm:mx-auto">
          <div className="flex items-center gap-[35px] flex-wrap justify-center sm:flex-col sm:items-start">
            <div className="sm:flex items-center">
              <div className="w-[25px] mx-auto sm:mr-[21px]">
                <img src={pin_location} alt="" />
              </div>
              <p className="common-text max-w-[313px] text-center mt-[21px] xl2:mt-[5px] sm:text-left sm:mt-0">
                6386 Spring St undefined Anchorage, Georgia 12473 United States
              </p>
            </div>
            <div className="sm:flex items-center">
              <div className="w-[21px] mx-auto sm:mr-[21px]">
                <img src={phone} alt="" />
              </div>
              <p className="common-text  text-center mt-[21px] xl2:mt-[5px]">
                (843) 555-0130
              </p>
            </div>
            <div className="sm:flex items-center">
              <div className="w-[26px] mx-auto sm:mr-[21px]">
                <img src={letter} alt="" />
              </div>
              <p className="common-text text-center mt-[21px] xl2:mt-[5px]">
                willie.jennings@example.com
              </p>
            </div>
          </div>
          <div className="w-[516px] h-[323px] mx-auto lg:my-[20px] lg:w-[500px] lg:h-[300px] xl2:w-[300px] xl2:h-[200px] sm:hidden">
            <iframe
              title="skytech-map"
              className="iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.2993959078008!2d76.68172833114447!3d30.709982535082425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef09c3edbdb9%3A0x6d08282e93a414dc!2sSkytech%20Leasing%20Solutions!5e0!3m2!1sen!2sin!4v1674468619452!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: "none", width: "100%", height: "100%" }}
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="flex items-center xl2:justify-center sm:mb-[92px]">
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

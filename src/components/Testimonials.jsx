import React from "react";
import ibm from "../images/ibm.png";
import client_img from "../images/user.png";

const Testimonials = () => {
  return (
    <div className="max-w-[1440px] mx-auto text-center pt-[111px] pb-[100px] lg:max-w-[680px] sm:pt-[91px]">
      <h2 className="mb-[90px] lg:mb-[30px] sm:mb-[105px]">Testimonials</h2>
      <div className="w-[150px] mx-auto mb-[60px] lg:mb-[30px] sm:mb-[53px]">
        <img src={ibm} alt="" />
      </div>
      <p className="tag-line max-w-[967px] mx-auto md:max-w-[500px] sm:max-w-[280px] sm:text-[14px] sm:leading-[16px] testimonial-text">
        Most calendars are designed for teams. Slate is designed for freelancers
        who want a simple way to plan their schedule.
      </p>
      <div className="client flex justify-center mt-[63px]">
        <div className="rounded-full w-[50px] h-[50px]">
          <img src={client_img} alt="" />
        </div>
        <div className="flex flex-col justify-around pl-[13px]">
          <p className="common-text text-left user-name">Organize across</p>
          <p className="common-text text-left user-designation">Ui designer</p>
        </div>
      </div>
      <button className="btn w-[276px] h-[60px] rounded-[35px] mt-[83px]">
        <h3 className="text-[#ffffff]">More Testimonials</h3>
      </button>
    </div>
  );
};

export default Testimonials;

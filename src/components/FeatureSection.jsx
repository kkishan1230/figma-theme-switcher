import React, { useRef, useState } from "react";
import open_feature from "../images/openfeature.svg";
import design from "../images/doodle.svg";
import brush from "../images/paint_brush.svg";
import Playbtn from "./Playbtn";
import video from "../video/video.mp4";

const Feature_section = () => {
  const videoRef = useRef();
  const progress_bar_ref = useRef();
  const [show_btn, setShow_btn] = useState(true);
  const [current_time, setCurrentTime] = useState(0);
  const [duration_time, setDurationTime] = useState(0);

  const show_fn = () => {
    setShow_btn(!show_btn);
  };
  const display_btn = () => {
    setShow_btn(true);
  };
  const pause_video = () => {
    videoRef.current.pause();

    setDurationTime(videoRef.current.duration);
  };
  const play_video = () => {
    videoRef.current.play();
    setDurationTime(videoRef.current.duration);
  };

  return (
    <div className="text-center mt-[126px] md:mt-[70px] sm:mt-[110px] ">
      <h2 className="text-[#252B42] mb-[27px] md:text-[36px] md:mb-0 sm:text-[48px] sm:mb-[27px]">
        Features
      </h2>
      <div className="tag-line text-[#374754] mx-auto max-w-[532px] md:text-[24px] sm:max-w-[265px]">
        Most calendars are designed for teams.
        <span className="sm:hidden"> Slate is designed for freelancers</span>
      </div>
      <div className="sm:flex sm:flex-col-reverse ">
        <div className="flex text-center gap-[76px] justify-center mt-[97px] md:mt-[50px] md:flex-col md:items-center lg:gap-[40px] lg:max-w-[680px] lg:mx-auto sm:mt-[82px] sm:gap-[82px]">
          <div className="max-w-[231px] ">
            <img
              alt=""
              src={open_feature}
              className="w-[46px] mx-auto mb-[27px]"
            />
            <h3 className="mb-[20px]">OpenType features Variable fonts</h3>
            <p>
              Slate helps you see how many more days you need to work to reach
              your financial goal.
            </p>
          </div>
          <div className="max-w-[231px] ">
            <img alt="" src={design} className="w-[50px] mx-auto mb-[27px]" />
            <h3 className="mb-[20px]">Design with real data</h3>
            <p>
              Slate helps you see how many more days you need to work to reach
              your financial goal.
            </p>
          </div>
          <div className="max-w-[231px] ">
            <img alt="" src={brush} className="w-[48px] mx-auto mb-[27px]" />
            <h3 className="mb-[20px]">Fastest way to take action</h3>
            <p>
              Slate helps you see how many more days you need to work to reach
              your financial goal.
            </p>
          </div>
        </div>
        <div className="w-fit mx-auto mt-[132px] relative flex items-center justify-center player-container md:mt-[50px]">
          <div
            className="absolute cursor-pointer z-10"
            onClick={() => {
              show_fn();
              play_video();
            }}
          >
            {show_btn && <Playbtn />}
          </div>
          <input
            onChange={(e) => {
              videoRef.current.currentTime =
                (parseInt(e.target.value) * duration_time) / 100;
            }}
            ref={progress_bar_ref}
            type="range"
            name="video_play"
            className="absolute bottom-[-10px] z-10 w-[80%] video_progress opacity-0"
            defaultValue={0}
          />
          <div
            onClick={() => {
              pause_video();
              display_btn();
            }}
          >
            <video
              className=" sm:max-w-[386px] md:max-w-[400px] lg:max-w-[520px]"
              ref={videoRef}
              onTimeUpdate={(e) => {
                setCurrentTime(videoRef.current.currentTime);
                progress_bar_ref.current.value =
                  (current_time / duration_time) * 100;
              }}
            >
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature_section;

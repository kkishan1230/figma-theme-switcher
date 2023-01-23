import React from "react";
import video from "../video/video.mp4";
import ReactPlayer from "react-player";

const YoutubePlayer = () => {
  return (
    <div>
      <ReactPlayer url={video} muted={true} controls={true} />
    </div>
  );
};

export default YoutubePlayer;

import React from "react";
import video from "../video/video.mp4";
import ReactPlayer from "react-player";
import Playbtn from "./Playbtn";

const YoutubePlayer = () => {
  const opts = {
    playerVars: {
      controls: 0,
    },
  };

  return (
    <div>
      <ReactPlayer url={video} muted={true} controls={true} />
    </div>
  );
};

export default YoutubePlayer;

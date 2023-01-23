import React from "react";
import video from "../video/video.mp4";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  return <ReactPlayer url={video} muted={true} width={1177} height={658} />;
};

export default VideoPlayer;

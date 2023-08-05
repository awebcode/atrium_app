import React, { useRef, useState } from "react";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";

const Video = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
    setIsPlaying(!video.paused);
  };

  return (
    <div>
      <div className="video-container">
        <video id="background-video" ref={videoRef} loop autoPlay>
          {/* Replace video.mp4 with the path to your video file */}
          <source src="/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay">
          <h1>WE ARE A TEAM OF TALENTED <br/> DEVELOPERS & DESIGNERS</h1>
          <button id="play-pause-button" onClick={handlePlayPause}>
            {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Video;

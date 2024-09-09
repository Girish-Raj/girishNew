import React from 'react';
import ReactPlayer from 'react-player';
import './VideoCard.css';

const VideoCard = ({ url, showVideo, setShowVideo }) => {

  const handleClose = () => {
    setShowVideo(false); // Hides the video by setting showVideo to false
  };

  return (
    <div>
      {showVideo && (
        <div className="video-wrapper">
          <button className="close-button" onClick={handleClose}>
            ✖
          </button>
          <ReactPlayer
            url={url}
            controls
            playing
            loop
            muted
            width="92vw"
            height="440px"
          />
        </div>
      )}
    </div>
  );
};

export default VideoCard;

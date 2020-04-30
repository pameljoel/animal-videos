import React from "react";
import ReactPlayer from 'react-player'

export const Video = (props) => {
  const { video } = props;
  const {id} = video;
  const {videoId} = id;
  const videoSrc = `https://www.youtube.com/embed/${videoId}`;

  const config = {
    youtube: {
      playerVars: {
        showinfo: 0,
        controls: 1,
        modestbranding: 1,
        loop: 1
      }
    }
  };

  return <div className="video">
    <div className='ui embed'>
      <ReactPlayer url={videoSrc} config={config} allowFullScreen playing />
    </div>
    <div className='ui segment'>
      <h4 className='ui header'>{video.snippet.title}</h4>
      <p>{video.snippet.description}</p>
    </div>
  </div>
};

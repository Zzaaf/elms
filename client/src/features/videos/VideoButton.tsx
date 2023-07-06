import React from 'react';
import { VideoSnippet } from './types/Videos';

const VideoButton = ({
  item,
  setCurrentVideo,
}: {
  item: VideoSnippet;
  setCurrentVideo: (value: string) => void;
}) => {
  return (
    <div>
      <button
        onClick={() => setCurrentVideo(item.resourceId.videoId)}
        className="video-page__button"
      >
        {item.title.split(' ')[0]}
      </button>
    </div>
  );
};

export default VideoButton;

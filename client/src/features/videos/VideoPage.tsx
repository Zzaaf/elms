import React, { useEffect, useState } from 'react';
import VideoButton from './VideoButton';
import './styles/VideoPage.scss';
import { VideoItem } from './types/Videos';

const listId = 'PLvCaAwzmrwpNX8_ppjWL3xaxmhB2EgNdk';
const apiKey = import.meta.env.VITE_YT_API_KEY;
const apiUrl =
  'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=25&playlistId=' +
  listId +
  '&key=' +
  apiKey;

const VideoPage = () => {
  const [videosList, setVideosList] = useState<VideoItem[]>([]);
  const [currentVideo, setCurrentVideo] = useState('');

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setVideosList(data.items);
      });
  }, []);

  return (
    <div className="video-page__container">
      {videosList.map((video) => (
        <VideoButton key={video.id} item={video.snippet} setCurrentVideo={setCurrentVideo} />
      ))}
      {currentVideo && (
        <iframe
          className="video-page__player"
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${currentVideo}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default VideoPage;

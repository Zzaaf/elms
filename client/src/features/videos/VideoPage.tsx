import { useEffect, useState } from 'react';
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
    document.title = "Видеолекции";
  }, []);

  return (
    <>
      <div className="video-page__container">
        {videosList.map((video) => (
          <VideoButton key={video.id} item={video.snippet} setCurrentVideo={setCurrentVideo} />
        ))}
      </div>
      <section className="video-page__player">
      {currentVideo && (
        <iframe
          className="video-page__player"
          width="900"
          height="600"
          src={`https://www.youtube.com/embed/${currentVideo}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      )}
    </section>
   </>
  );
};

export default VideoPage;

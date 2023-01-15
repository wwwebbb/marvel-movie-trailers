import { useContext } from 'react';
import WatchQueueContext from './WatchQueueContext';

const WatchQueue = () => {
  const { watchQueue } = useContext(WatchQueueContext);

  return (
    <div className="fixed z-10 bottom-1/4">
      {watchQueue.map((video, index) => (
        <div key={index}>
          <iframe
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            title={video.snippet.title}
            border="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-64"
          />
        </div>
      ))}
    </div>
  );
};

export default WatchQueue;

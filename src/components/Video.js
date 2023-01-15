import QueueButton from './QueueButton';
import WatchQueueContext from './WatchQueue/WatchQueueContext';
import { useContext } from 'react';

const Video = ({ video, index }) => {
  const { watchQueue, addToQueue, removeFromQueue } =
    useContext(WatchQueueContext);
  const isQueued = watchQueue.some((v) => v.id === video.id);

  return (
    <div
      key={index}
      className="bg-zinc-800 container mx-auto max-w-md rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 hover:bg-zinc-700 duration-100"
    >
      <iframe
        src={`https://www.youtube.com/embed/${video.id.videoId}`}
        title={video.snippet.title}
        border="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-64"
      />
      <div className="px-6 py-4 flex gap-x-3 justify-between">
        <div>
          <div className="text-white text-lg font-medium">
            {video.snippet.title}
          </div>
          <div className="text-slate-50 pt-1 text-sm font-light italic">
            {video.snippet.publishTime.slice(0, 10)}
          </div>
        </div>
        <QueueButton
          video={video}
          isQueued={isQueued}
          addToQueue={addToQueue}
          removeFromQueue={removeFromQueue}
        />
      </div>
    </div>
  );
};

export default Video;

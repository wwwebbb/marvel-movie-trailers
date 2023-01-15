import { useContext, useState } from 'react';
import WatchQueueContext from './WatchQueueContext';

const WatchQueue = () => {
  const { watchQueue } = useContext(WatchQueueContext);
  const [expanded, setExpanded] = useState(null);

  const toggleExpanded = (id) => {
    setExpanded((prevExpanded) => (prevExpanded === id ? null : id));
  };

  return (
    <div className="fixed p-1 z-10 bottom-[.5rem] right-5">
      {watchQueue.map((video, index) => {
        const { videoId } = video.id;
        return (
          <div key={index}>
            <p className="md:space-x-1 space-y-1 md:space-y-0 mb-4">
              <button
                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                type="button"
                onClick={() => toggleExpanded(videoId)}
              >
                {video.snippet.title}
              </button>
            </p>
            <div
              className={`collapse ${expanded === videoId ? 'show' : ''}`}
              id={`collapseExample-${videoId}`}
            >
              <div className="block p-6 rounded-lg shadow-lg bg-white">
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={video.snippet.title}
                  border="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-64"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WatchQueue;

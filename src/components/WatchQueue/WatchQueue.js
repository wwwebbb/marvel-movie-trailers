import { useContext, useState } from 'react';
import WatchQueueContext from './WatchQueueContext';

const WatchQueue = () => {
  const { watchQueue, clearQueue } = useContext(WatchQueueContext);
  const [expanded, setExpanded] = useState(null);

  const toggleExpanded = (id) => {
    setExpanded((prevExpanded) => (prevExpanded === id ? null : id));
  };

  const removeAll = () => {
    clearQueue();
    setExpanded(null);
  };

  const truncateTitle = (title) => {
    const truncatedTitle = title.replace(
      /Marvel's|Marvel’s|Marvel Studios[']|Marvel Studios[’]?/gi,
      ''
    );
    return truncatedTitle.length >= 38
      ? truncatedTitle.slice(0, 38) + '...'
      : truncatedTitle;
  };

  if (watchQueue.length >= 1) {
    return (
      <div
        className="accordion accordion-flush rounded fixed p-1 bg-gray-900 z-10 bottom-[.5rem] right-5"
        id="accordianWatchQueueList"
      >
        <h2 className="text-white text-center mb-1">Watch Queue</h2>
        <div className="w-96 watch-queue-scrollbar overflow-y-auto overflow-x-hidden max-h-80">
          {watchQueue.map((video, index) => (
            <div
              key={index}
              className="accordion-item overflow-hidden border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200 hover:translate-x-2 duration-100"
            >
              <h2
                className="accordion-header mb-0 text-gray-800"
                id={`heading${index}`}
              >
                <button
                  className="w-full accordion-button relative flex items-center py-4 px-5 text-base !text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none"
                  type="button"
                  onClick={() => toggleExpanded(video.id.videoId)}
                >
                  {truncateTitle(video.snippet.title)}
                </button>
              </h2>
              <div
                className={`collapse ${
                  expanded === video.id.videoId ? 'show' : ''
                }`}
                id={`#collapse-${index}`}
                data-bs-parent="accordianWatchQueueList"
              >
                <div className="accordion-body py-4 px-5">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id.videoId}`}
                    title={video.snippet.title}
                    border="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-64"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="w-full rounded hover:bg-red-700 duration-100 bg-red-600 text-white p-1 mt-1"
          onClick={removeAll}
        >
          Remove All
        </button>
      </div>
    );
  }
};

export default WatchQueue;

import { useContext, useState } from 'react';
import WatchQueueContext from './WatchQueueContext';
import WatchQueueItem from './WatchQueueItem';

const WatchQueue = () => {
  const { watchQueue, clearQueue } = useContext(WatchQueueContext);
  const [expanded, setExpanded] = useState(null);

  const removeAll = () => {
    clearQueue();
    setExpanded(null);
  };

  if (watchQueue.length >= 1) {
    return (
      <div
        className="accordion accordion-flush rounded fixed p-1 backdrop-blur-lg backdrop-brightness-50 z-10 bottom-[.5rem] right-5"
        id="accordianWatchQueueList"
      >
        <h2 className="text-white text-center mb-1">Watch Queue</h2>
        <div className="w-96 mini-scrollbar overflow-y-auto overflow-x-hidden max-h-60 lg:max-h-80">
          {watchQueue.map((video, index) => (
            <WatchQueueItem
              video={video}
              index={index}
              expanded={expanded}
              setExpanded={setExpanded}
            />
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

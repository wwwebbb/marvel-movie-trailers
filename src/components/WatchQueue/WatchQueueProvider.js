import { useState } from 'react';
import WatchQueueContext from './WatchQueueContext';

const WatchQueueProvider = (props) => {
  const [watchQueue, setWatchQueue] = useState([]);

  const addToQueue = (video) => {
    setWatchQueue([...watchQueue, video]);
  };

  const removeFromQueue = (video) => {
    setWatchQueue(watchQueue.filter((v) => v.id !== video.id));
  };

  const clearQueue = (video) => {
    setWatchQueue([]);
  };

  const value = { watchQueue, addToQueue, removeFromQueue, clearQueue };

  return (
    <WatchQueueContext.Provider value={value}>
      {props.children}
    </WatchQueueContext.Provider>
  );
};

export default WatchQueueProvider;

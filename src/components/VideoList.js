import React from 'react';

const VideoList = ({ videos }) => {
  return (
    <div className="container mx-auto grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-4 gap-y-7">
      {videos.map((video, index) => (
        <div
          key={index}
          className="container mx-auto max-w-md rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 duration-100 dark:bg-slate-800"
        >
          <iframe
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            title={video.snippet.title}
            border="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-64"
          />
          <div className="px-6 py-4 ">
            <div className="text-lg text-gray-800 font-medium dark:text-white">
              {video.snippet.title}
            </div>
            <div className="pt-1 text-sm text-gray-800 font-light italic dark:text-slate-400">
              {video.snippet.publishTime.slice(0, 10)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default VideoList;

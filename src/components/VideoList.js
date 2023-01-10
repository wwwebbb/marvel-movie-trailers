import React from 'react';

const VideoList = ({ videos }) => {
  return (
    <div className="grid grid-cols-4 gap-4 auto-cols-auto">
      {videos.map((video, index) => (
        <div
          key={index}
          className="max-w-sm rounded-lg overflow-hidden shadow-lg"
        >
          <iframe
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            title={video.snippet.title}
            border="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-64"
          />
          <div className="px-6 py-4">
            <div className="text-lg text-gray-800 font-medium">
              {video.snippet.title}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default VideoList;

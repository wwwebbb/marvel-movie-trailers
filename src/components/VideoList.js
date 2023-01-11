import React from 'react';

const VideoList = ({ videos }) => {
  return (
    <div className="container mx-auto grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-4 gap-y-7">
      {videos.map((video, index) => (
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
          <div className="px-6 py-4 ">
            <div className="text-white text-lg font-medium">
              {video.snippet.title}
            </div>
            <div className="text-slate-50 pt-1 text-sm font-light italic">
              {video.snippet.publishTime.slice(0, 10)}
            </div>
            <div class="flex justify-center">
              <div class="form-check">
                <input
                  class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-red-600 checked:border-red-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label
                  class="form-check-label inline-block text-white text-[14px]"
                  for="flexCheckDefault"
                >
                  +Queue
                </label>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default VideoList;

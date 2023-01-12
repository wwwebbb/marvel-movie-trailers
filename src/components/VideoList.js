import QueueButton from './QueueButton';

const VideoList = ({ sortedYears, groupedVideos }) => {
  return (
    <div>
      {sortedYears.map((year) => (
        // use the year as the key for the div element
        <div id={year} className="relative" key={year}>
          {/*render the year heading in white*/}
          <h2 className="sticky top-0 z-[2] bg-zinc-900 text-white text-center text-lg p-5 mt-12 mb-4">
            {year}
          </h2>
          {/*use grid container to display videos*/}
          <div className="container mx-auto grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-4 gap-y-7">
            {groupedVideos[year].map((video, index) => (
              <div
                key={index}
                className="bg-zinc-800 container mx-auto max-w-md rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 hover:bg-zinc-700 duration-100"
              >
                {/* render video by embedding the YouTube video */}
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
                  <QueueButton />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoList;

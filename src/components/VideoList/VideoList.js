import Video from './Video';

const VideoList = ({ sortedYears, groupedVideos }) => {
  return (
    <div className="backdrop-blur-xl backdrop-brightness-50 pb-4">
      {sortedYears.map((year) => (
        // use the year as the key for the div element
        <div id={year} className="relative" key={year}>
          {/*render the year heading in white*/}
          <h2 className="year-header sticky top-0 z-[1] backdrop-blur-2xl backdrop-brightness-[.2] text-white text-center text-lg p-5 mt-12 mb-4">
            {year}
          </h2>
          {/*use grid container to display videos*/}
          <div className="container mx-auto grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-4 gap-y-7">
            {groupedVideos[year].map((video, index) => (
              <Video video={video} key={index} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoList;

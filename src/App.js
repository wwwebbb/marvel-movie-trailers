import { useEffect, useState, useRef } from 'react';
import './App.css';

import LandingScreen from './LandingScreen';
import VideoList from './components/VideoList/VideoList';
import YearSidebar from './components/YearSidebar';
import WatchQueueProvider from './components/WatchQueue/WatchQueueProvider';
import WatchQueue from './components/WatchQueue/WatchQueue';

function App() {
  // Declaring state variable to store an array of video data
  const [videos, setVideos] = useState([]);

  // useEffect hook that runs when the component mounts to fetch video data
  useEffect(() => {
    // Fetching video data from the YouTube API using the specified URL
    fetch(`https://pure-ravine-05394.herokuapp.com/videos`)
      // Parsing the response to json
      .then((response) => response.json())
      .then((data) => {
        // Sorting the video data based on the date they were published
        const sortedVideos = data.items.sort((a, b) => {
          return (
            new Date(b.snippet.publishedAt) - new Date(a.snippet.publishedAt)
          );
        });
        // Filtering irrelevant videos and replacing the &#39; and &quot; HTML entity codes with apostrophes and double quotes respectively
        const filteredVideos = sortedVideos.filter(({ snippet }) => {
          if (
            !/Time|Assembled|Teaser|Reveal|Launch|Announcement|First|Incoming|Making|Darkness|616|Hulu|Fox/gi.test(
              snippet.title
            )
          ) {
            snippet.title = snippet.title
              .replace(/&#39;/g, "'")
              .replace(/&quot;/g, '"');
            return true;
          }
          return false;
        });
        setVideos(filteredVideos);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //group videos by year
  const groupedVideos = videos.reduce((acc, video) => {
    const year = video.snippet.publishTime.slice(0, 4);
    // check if the year already exists in the accumulator object
    if (!acc[year]) {
      // if not, create an empty array for the year
      acc[year] = [];
    }
    // push the video into the array for the corresponding year
    acc[year].push(video);
    return acc;
  }, {});

  // sort the years by descending order
  const sortedYears = Object.keys(groupedVideos).sort().reverse();

  // Landing Screen stays in the background during scroll
  const landingScreenRef = useRef(null);
  const mainStyle = {
    marginTop: landingScreenRef.current
      ? landingScreenRef.current.offsetHeight
      : 0,
  };

  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-screen z-0"
        ref={landingScreenRef}
      >
        <LandingScreen />
      </div>
      <main className="relative z-1 mt-1" style={mainStyle}>
        <YearSidebar sortedYears={sortedYears} />
        <WatchQueueProvider>
          <VideoList groupedVideos={groupedVideos} sortedYears={sortedYears} />
          <WatchQueue />
        </WatchQueueProvider>
      </main>
    </>
  );
}

export default App;

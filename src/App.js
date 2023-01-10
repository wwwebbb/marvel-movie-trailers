import './App.css';
import VideoList from './components/VideoList';
import { useEffect, useState } from 'react';

function App() {
  // Declaring state variable to store an array of video data
  const [videos, setVideos] = useState([]);

  // useEffect hook that runs when the component mounts to fetch video data
  useEffect(() => {
    // Variable for the YouTube channel id of the Marvel Entertainment channel
    const channelId = 'UCvC4D8onUfXzvjTOM-dBfEA';
    // Variable to access the API key from the .env file
    const apiKey = process.env.REACT_APP_YT_KEY;
    // Variable to limit the max number of returned results to 50
    const maxResults = 100;

    // Fetching video data from the YouTube API using the specified URL
    fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&q="official trailer"&maxResults=${maxResults}`
    )
      // Parsing the response to json
      .then((response) => response.json())
      .then((data) => {
        // Sorting the video data based on the date they were published
        const sortedVideos = data.items.sort((a, b) => {
          return (
            new Date(b.snippet.publishedAt) - new Date(a.snippet.publishedAt)
          );
        });
        // Replacing the &#39; and &quot; HTML entity codes with apostrophes and double quotes respectively
        sortedVideos.forEach((video) => {
          video.snippet.title = video.snippet.title
            .replace(/&#39;/g, "'")
            .replace(/&quot;/g, '"');
        });
        // Logging the sorted video data to the console for debugging purposes
        console.log(sortedVideos);
        // Updating the state variable with the sorted video data
        setVideos(sortedVideos);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <VideoList videos={videos} />
    </div>
  );
}

export default App;

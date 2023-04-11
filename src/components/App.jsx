import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from '../components/VideoList.js';
import VideoPlayer from '../components/VideoPlayer.js';
import Search from '../components/Search.js';
import searchYouTube from '../lib/searchYouTube.js';

var App = () => {
  const [videoData, setVideoData] = React.useState([]);
  const [currentVideo, setCurrentVideo] = React.useState(exampleVideoData[0]);

  React.useEffect(function() {
    searchYouTube('', (data) => {
      setVideoData(data);
      setCurrentVideo(data[0]);
    });
  }, []);

  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <Search searchFunction={searchYouTube} videoSetter={setCurrentVideo} videoDataSetter={setVideoData} />
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer video={currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={videoData} videoSetter = {setCurrentVideo}/>
        </div>
      </div>
    </div>
  );
};
//<div><h5><em>videoList</em> view goes here</h5></div>

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

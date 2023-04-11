import VideoListEntry from '../components/VideoListEntry.js';

var VideoList = ({ videos, videoSetter }) => {

  return (
    <div className="video-list">
      {videos.map((video, index) => (
        <VideoListEntry key={index} video={video} videoSetter={videoSetter}/>
      ))}
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired,
  videoSetter: PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;

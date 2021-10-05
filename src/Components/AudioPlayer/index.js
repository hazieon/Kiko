import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

function Player({ url }) {
  return (
    <AudioPlayer
      autoPlay={false}
      showJumpControls={false}
      showDownloadProgress={true}
      style={{
        width: "500px",
        margin: "auto",
        marginTop: "2rem",
      }}
      src={url}
      onPlay={(e) => console.log("onPlay")}
      // other props here
    />
  );
}

export default Player;

//https://www.npmjs.com/package/react-h5-audio-player

// import React from "react";
// import ReactPlayer from "react-player";

// // Render a YouTube video player
// <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />;

// const handleStop = (recordedBlob) => {
//   const url = URL.createObjectURL(recordedBlob.blob);
//   setSrc(url); //setting the url in your state. A hook in this case btw
// };

// // /Then you can create an other function/method in your component and create/play the audio object:

// const handlePlay = () => {
//   const tmp = new Audio(src); //passing your state (hook)
//   tmp.play(); //simple play of an audio element.
// };

import React, { useEffect, useState } from "react";
import { ReactMic } from "react-mic";
import ReactPlayer from "react-player";
import styles from "./index.module.css";

export function RecorderApp() {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     record: false,
  //   };
  // }
  const [recording, setRecording] = useState(false);
  const [blob, setBlob] = useState({});
  const [url, setUrl] = useState();

  function startRecording() {
    setRecording(true);
  }
  function stopRecording() {
    setRecording(false);
  }

  function onData(recordedBlob) {
    // console.log("chunk of real-time data is: ", recordedBlob);
  }

  function onStop(recordedBlob) {
    // console.log("recordedBlob is: ", recordedBlob);
    const url = URL.createObjectURL(recordedBlob.blob);
    setUrl(url);
    setBlob(recordedBlob);
  }
  useEffect(() => {
    console.log("blob:", blob);
    console.log("url", url);
  }, [blob]);

  const handlePlay = () => {
    const tmp = new Audio(url); //passing your state (hook)
    tmp.play(); //simple play of an audio element.
  };

  return (
    <div>
      <div className={styles.recordButtonBox}>
        <button
          className={recording ? styles.recordingNow : styles.recordButton}
          onClick={recording ? stopRecording : startRecording}
          type="button"
        >
          Start
        </button>
      </div>
      <ReactMic
        className={styles.reactMic}
        record={recording}
        pause={false}
        onStop={onStop}
        onData={onData}
        strokeColor="#000000"
        backgroundColor="rgb(117, 193, 255)"
        visualSetting="frequencyBars"
      />
      <div className={styles.recordButtonBox}>
        <button
          className={recording ? styles.stop : styles.noStop}
          onClick={stopRecording}
          type="button"
        >
          Stop ■
        </button>
      </div>
      <button onClick={handlePlay}>Play</button>
      {/* <ReactPlayer url={url} playing /> */}
    </div>
  );
}
// }

// <ReactMic
//   record={boolean}         // defaults -> false.  Set to true to begin recording
//   pause={boolean}          // defaults -> false (available in React-Mic-Gold)
//   visualSetting="sinewave" // defaults -> "sinewave".  Other option is "frequencyBars"
//   className={string}       // provide css class name
//   onStop={function}        // required - called when audio stops recording
//   onData={function}        // optional - called when chunk of audio data is available
//   onBlock={function}       // optional - called if user selected "block" when prompted to allow microphone access (available in React-Mic-Gold)
//   strokeColor={string}     // sinewave or frequency bar color
//   backgroundColor={string} // background color
//   mimeType="audio/webm"     // defaults -> "audio/webm".  Set to "audio/wav" for WAV or "audio/mp3" for MP3 audio format (available in React-Mic-Gold)
//   echoCancellation={boolean} // defaults -> false
//   autoGainControl={boolean}  // defaults -> false
//   noiseSuppression={boolean} // defaults -> false
//   channelCount={number}     // defaults -> 2 (stereo).  Specify 1 for mono.
//   bitRate={256000}          // defaults -> 128000 (128kbps).  React-Mic-Gold only.
//   sampleRate={96000}        // defaults -> 44100 (44.1 kHz).  It accepts values only in range: 22050 to 96000 (available in React-Mic-Gold)
//   timeSlice={3000}          // defaults -> 4000 milliseconds.  The interval at which captured audio is returned to onData callback (available in React-Mic-Gold).
// />

// startRecording = () => {
//   this.setState({ record: true });
// };

// stopRecording = () => {
//   this.setState({ record: false });
// };

// onData(recordedBlob) {
//   console.log("chunk of real-time data is: ", recordedBlob);
// }

// onStop(recordedBlob) {
//   console.log("recordedBlob is: ", recordedBlob);
// }

// render() {

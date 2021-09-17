// import React, { Component } from "react";
// import styles from "./index.module.css";
// import AudioReactRecorder, { RecordState } from "audio-react-recorder";

// class Recorder extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       recordState: null,
//     };
//   }

//   start = () => {
//     this.setState({
//       recordState: RecordState.START,
//     });
//     console.log("start");
//     console.log(this.state);
//   };

//   stop = () => {
//     this.setState({
//       recordState: RecordState.STOP,
//     });
//   };

//   //audioData contains blob and blobUrl
//   onStop = (audioData) => {
//     console.log("audioData", audioData);
//   };

//   render() {
//     const { recordState } = this.state;

//     return (
//       <div>
//         <button
//           className={recordState ? styles.recordingNow : styles.recordButton}
//           onClick={this.start}
//         >
//           Start
//         </button>
//         <button className={styles.controls} onClick={this.stop}>
//           ■
//         </button>
//         <AudioReactRecorder state={recordState} onStop={this.onStop} />
//         <h2
//           className={recordState ? styles.noMessage : styles.recordingMessage}
//         >
//           Press the button to record a message ↑
//         </h2>
//       </div>
//     );
//   }
// }
// export default Recorder;

// // state 	string 	RecordState.NONE 	RecordState.(NONE,START,STOP,PAUSE)
// // type 	string 	audio/wav 	MIME type of the audio file
// // backgroundColor 	string 	rgb(200, 200, 200) 	Background color of the audio wave / canvas
// // foregroundColor 	string 	rgb(0, 0, 0) 	Foreground color of the audio wave / canvas
// // canvasWidth 	number,string 	500 	Canvas width (you can use css to make it responsive)
// // canvasHeight 	number,string 	300 	canvas height

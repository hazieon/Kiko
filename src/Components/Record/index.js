import React, { useState } from "react";
import styles from "./index.module.css";
import { RecorderApp } from "../RecorderApp";

function Record() {
  const [recording, setRecording] = useState(false);
  const [message, setMessage] = useState();
  return (
    <div className={styles.recordBox}>
      <div className={styles.headerBox}>
        <h1 className={styles.header}>Record a Message</h1>
      </div>
      <div className={styles.contentBox}>
        {/* <div className={styles.recordButtonBox}>
          <button
            className={recording ? styles.recordingNow : styles.recordButton}
            onClick={() => setRecording(!recording)}
          >
            Record ◎
          </button>
        </div> */}
        <RecorderApp />
        {/* <div className={styles.controlsBox}>
          <button className={styles.controls}>▶</button>
          <button className={styles.controls}>■</button>
          <button className={styles.controls}> ⏸</button>
        </div> */}
        <div className={styles.controlsBox}>
          <button className={styles.saveButon}>Save</button>
        </div>
      </div>
    </div>
  );
}

//on click of record button: start recording audio, controls hidden
//change record button to flash? change shape?
//click record button again to stop recording -> controls shown
//on click of save button: save this audio input to state - useState
//Play the audio from state on the page
//on click of save button, save the audio to db?

export default Record;

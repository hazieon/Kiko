import React, { useState } from "react";
import styles from "./index.module.css";
import Player from "../AudioPlayer";

function Listen() {
  const [messages, setMessages] = useState([
    { 1: "beep" },
    { 2: "beep" },
    { 3: "beep" },
    { 4: "beep" },
  ]);
  return (
    <div className={styles.listenBox}>
      <div className={styles.headerBox}>
        <h1 className={styles.header}>Listen</h1>
      </div>
      <div className={styles.contentBox}>
        {messages.map((item, i) => {
          return (
            <div className={styles.messageItemBox}>
              <p>hello {i}</p>
              <Player />
            </div>
          );
        })}
      </div>
    </div>
  );
}
//fetch audio messages from the db
//save these in state and map out onto page in boxes?
//https://www.npmjs.com/package/material-ui-audio-player

export default Listen;

import React from "react";
import styles from "./index.module.css";

function Listen() {
  return (
    <div className={styles.listenBox}>
      <div className={styles.headerBox}>
        <h1 className={styles.header}>Listen</h1>
      </div>
      <div className={styles.contentBox}></div>
    </div>
  );
}
//fetch audio messages from the db
//save these in state and map out onto page in boxes?
//https://www.npmjs.com/package/material-ui-audio-player

export default Listen;

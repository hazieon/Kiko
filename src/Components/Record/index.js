import React from "react";
import styles from "./index.module.css";

function Record() {
  return (
    <div className={styles.recordBox}>
      <div className={styles.headerBox}>
        <h1 className={styles.header}>Record a Message</h1>
      </div>
    </div>
  );
}
export default Record;

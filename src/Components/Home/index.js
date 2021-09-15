import React from "react";
import styles from "./index.module.css";

function Home() {
  return (
    <div className={styles.homeBox}>
      <div className={styles.headerBox}>
        <h1 className={styles.header}>Home</h1>
      </div>
      <div className={styles.navigationBox}>
        <div className={styles.buttonBox}>
          <button className={styles.navigationButton} id={styles.recordButton}>
            Record
          </button>
          <button className={styles.navigationButton} id={styles.listenButton}>
            Listen
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;

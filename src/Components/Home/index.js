import React from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className={styles.homeBox}>
      <div className={styles.headerBox}>
        <h1 className={styles.header}>Kiko</h1>
      </div>
      <div className={styles.navigationBox}>
        <div className={styles.buttonBox}>
          <Link to="/record">
            <button
              className={styles.navigationButton}
              id={styles.recordButton}
            >
              Record
            </button>
          </Link>
          <Link to="/listen">
            <button
              className={styles.navigationButton}
              id={styles.listenButton}
            >
              Listen
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;

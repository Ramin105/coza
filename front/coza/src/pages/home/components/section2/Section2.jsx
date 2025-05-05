import React from "react";
import styles from "./Section.module.css";
const Section2 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        <div className={styles.card}>
          <img
            src="https://preview.colorlib.com/theme/cozastore/images/banner-01.jpg"
            alt=""
          />
          <div className={styles.cardtext}>
            <h2>Women</h2>
            <p>Spring 2018</p>
          </div>
        </div>
        <div className={styles.card}>
          <img
            src="https://preview.colorlib.com/theme/cozastore/images/banner-01.jpg"
            alt=""
          />
          <div className={styles.cardtext}>
            <h2>Women</h2>
            <p>Spring 2018</p>
          </div>
        </div>
        <div className={styles.card}>
          <img
            src="https://preview.colorlib.com/theme/cozastore/images/banner-01.jpg"
            alt=""
          />
          <div className={styles.cardtext}>
            <h2>Women</h2>
            <p>Spring 2018</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;

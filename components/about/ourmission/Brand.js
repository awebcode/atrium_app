import React from "react";
import styles from "./BrandingDesignAgency.module.css";

const BrandingDesignAgency = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.h1x}>Creative Branding Design Agency</h1>
        <p className={styles.px}>Your tagline or description goes here.</p>
        <button className={styles.button}>Learn More</button>
      </div>
    </div>
  );
};

export default BrandingDesignAgency;

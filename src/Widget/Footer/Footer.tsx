import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.description}>currently playing</p>
      <p className={styles.stationName}>Dribble FM</p>
    </div>
  );
};

export default Footer;

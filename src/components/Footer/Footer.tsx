import React from "react";
import styles from "./Footer.module.css";
import { useSelector } from "react-redux";
import { WidgetState } from "../../redux/reduxTypes";

const Footer: React.FC = () => {
  const stationName = useSelector((state: WidgetState) => state.stationName);

  return (
    <div className={styles.footer}>
      <div
        className={`${styles.wrapper} ${stationName ? styles.isVisible : null}`}
      >
        <p className={styles.description}>currently playing</p>
        <p className={styles.stationName}>{stationName}</p>
      </div>
    </div>
  );
};

export default Footer;

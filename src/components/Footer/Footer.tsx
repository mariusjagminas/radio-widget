import React from "react";
import styles from "./Footer.module.css";
import { useSelector } from "react-redux";
import { State } from "../../store/store";

const Footer: React.FC = () => {
  const state = useSelector((state: State) => state);

  return (
    <div className={styles.footer}>
      {state.stationName && (
        <>
          <p className={styles.description}>currently playing</p>
          <p className={styles.stationName}>{state.stationName}</p>
        </>
      )}
    </div>
  );
};

export default Footer;

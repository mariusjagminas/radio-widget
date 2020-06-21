import React from "react";
import styles from "./Stations.module.css";
import stationsList from "./stationsList";
import Station from "./Station/Station";

const Stations: React.FC = () => {
  return (
    <ul className={styles.stations}>
      {stationsList.map((station) => (
        <Station key={station.stationName} station={station} />
      ))}
    </ul>
  );
};

export default Stations;

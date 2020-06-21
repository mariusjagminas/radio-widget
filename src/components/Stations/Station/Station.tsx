import React from "react";
import { StationInter } from "../stationsList";
import styles from "./Station.module.css";
import { IconContext } from "react-icons";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import image from "../../../assets/image.jpg";
import { useSelector, useDispatch } from "react-redux";
import { SET_ACTIVE_STATION, State } from "../../../store/store";

interface StationProps {
  station: StationInter;
}

const Station: React.FC<StationProps> = ({ station }) => {
  const stationName = useSelector((state: State) => state.stationName);
  const activeStationClass =
    stationName === station.stationName ? styles.activeStation : null;
  const dispatch = useDispatch();

  return (
    <li className={`${styles.station} ${activeStationClass}`}>
      <div className={`${styles.wrapper} ${styles.wrapperExpand} `}>
        <IconContext.Provider value={{ color: "#a2abbd", size: "41px" }}>
          <div className={styles.volumeBtn}>
            <AiOutlinePlusCircle />
          </div>
          <div className={styles.imageWrapper}>
            <img className={styles.image} src={image} alt="drop" />
          </div>
          <div className={styles.volumeBtn}>
            <AiOutlineMinusCircle />
          </div>
        </IconContext.Provider>
      </div>
      <button
        className={styles.button}
        onClick={() =>
          dispatch({ type: SET_ACTIVE_STATION, payload: station.stationName })
        }
      >
        <p className={styles.stationName}>{station.stationName}</p>
        <p className={styles.stationFrequency}>{station.stationFrequency}</p>
      </button>
    </li>
  );
};

export default Station;
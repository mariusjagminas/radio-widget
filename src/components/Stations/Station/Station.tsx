import React from "react";
import { StationInter } from "../stationsList";
import styles from "./Station.module.css";
import { IconContext } from "react-icons";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import image from "../../../assets/image.jpg";
import { useSelector, useDispatch } from "react-redux";
import { setActiveStation } from "../../../redux/actions";
import { WidgetState } from "../../../redux/reduxTypes";

interface Props {
  station: StationInter;
}

const Station: React.FC<Props> = ({ station }) => {
  const stationName = useSelector((state: WidgetState) => state.stationName);
  const dispatch = useDispatch();

  const activeStationClass =
    stationName === station.stationName ? styles.activeStation : null;

  return (
    <li className={`${styles.station} ${activeStationClass}`}>
      <div className={styles.wrapper}>
        <IconContext.Provider value={{ color: "#a2abbd", size: "41px" }}>
          <button className={styles.volumeBtn}>
            <AiOutlinePlusCircle />
          </button>
          <div className={styles.imageWrapper}>
            <img className={styles.image} src={image} alt="drop" />
          </div>
          <button className={styles.volumeBtn}>
            <AiOutlineMinusCircle />
          </button>
        </IconContext.Provider>
      </div>
      <button
        className={styles.button}
        onClick={() => dispatch(setActiveStation(station.stationName))}
      >
        <p className={styles.stationName}>{station.stationName}</p>
        <p className={styles.stationFrequency}>{station.stationFrequency}</p>
      </button>
    </li>
  );
};

export default Station;

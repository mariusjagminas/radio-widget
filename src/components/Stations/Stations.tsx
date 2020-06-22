import React from "react";
import stationsList from "./stationsList";
import Station from "./Station/Station";
import { Scrollbars } from "react-custom-scrollbars";
import { StationData } from "../../redux/reduxTypes";

const Stations: React.FC = () => {
  return (
    <Scrollbars style={{ height: 345 }} autoHide>
      {stationsList.map((station: StationData) => (
        <Station key={station.stationName} station={station} />
      ))}
    </Scrollbars>
  );
};

export default Stations;

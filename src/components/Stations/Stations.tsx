import React from "react";
import stationsList from "./stationsList";
import Station from "./Station/Station";
import { Scrollbars } from "react-custom-scrollbars";

const Stations: React.FC = () => {
  return (
    <Scrollbars style={{ height: 345 }} autoHide>
      {stationsList.map((station) => (
        <Station key={station.stationName} station={station} />
      ))}
    </Scrollbars>
  );
};

export default Stations;

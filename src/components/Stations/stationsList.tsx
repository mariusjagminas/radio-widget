export interface StationInter {
  stationName: string;
  stationFrequency: string;
}

const stationsList: Array<StationInter> = [
  { stationName: "Putin FM", stationFrequency: "66,6" },
  { stationName: "Dribble FM", stationFrequency: "101,2" },
  { stationName: "Doge FM", stationFrequency: "99,4" },
  { stationName: "Ballads FM", stationFrequency: "87,1" },
  { stationName: "Maximum FM", stationFrequency: "142,2" },
];

export default stationsList;
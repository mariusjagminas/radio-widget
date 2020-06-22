import React from "react";
import styles from "./Widget.module.css";
import Header from "./Header/Header";
import Stations from "./Stations/Stations";
import Footer from "./Footer/Footer";

const Widget: React.FC = () => {
  return (
    <div className={styles.widget}>
      <Header />
      <Stations />
      <Footer />
    </div>
  );
};

export default Widget;

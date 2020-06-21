import React from "react";
import styles from "./Header.module.css";
import { IconContext } from "react-icons";
import { BsPower } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { useDispatch } from "react-redux";
import { UNSET_ACTIVE_STATION } from "../../store/store";

const Header: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.header}>
      <IconContext.Provider value={{ color: "#ffffff", size: "38px" }}>
        <div className={styles.arrow}>
          <IoIosArrowBack />
        </div>
      </IconContext.Provider>
      <p className={styles.title}>stations</p>
      <IconContext.Provider value={{ color: "#ffffff", size: "30px" }}>
        <button
          className={styles.powerButton}
          onClick={() => dispatch({ type: UNSET_ACTIVE_STATION })}
        >
          <BsPower />
        </button>
      </IconContext.Provider>
    </div>
  );
};

export default Header;

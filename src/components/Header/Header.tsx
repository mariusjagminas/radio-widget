import React from "react";
import styles from "./Header.module.css";
import { IconContext } from "react-icons";
import { BsPower } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { useDispatch } from "react-redux";
import { unsetActiveStation } from "../../redux/actions";

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
          aria-label="power button"
          className={styles.powerButton}
          onClick={() => dispatch(unsetActiveStation())}
        >
          <BsPower />
        </button>
      </IconContext.Provider>
    </div>
  );
};

export default Header;

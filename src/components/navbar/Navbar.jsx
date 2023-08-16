import React from "react";
import Image from "next/image";
import styles from "./navbar.module.css";
import Logo from "../../../public/logo.png";
import downIcon from "../../../public/down-icon.png";

export const Navbar = () => {
  return (
    <div>
      <nav className={styles.nav}>
        <Image src={Logo} className={styles.img} />

        <div className={styles.btnsContainter}>
          <button className={styles.lanBtn}>
            English
            <Image src={downIcon} className={styles.downIcon} />
          </button>
          <button className={styles.btn}>LogIn</button>
        </div>
      </nav>
    </div>
  );
};

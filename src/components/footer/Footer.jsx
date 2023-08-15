import React from "react";
import styles from "./footer.module.css";
import downIcon from "../../../public/down-icon.png";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <h2 className={styles.h2}>Question ? 00-000-0000-00</h2>

      <div className={styles.row}>
        <div className={styles.col}>
          <a href="#" className={styles.a}>
            FAQ
          </a>
          <a href="#" className={styles.a}>
            Investor Relations
          </a>
          <a href="#" className={styles.a}>
            Privacy
          </a>
          <a href="#" className={styles.a}>
            Speed Test
          </a>
        </div>

        <div className={styles.col}>
          <a href="#" className={styles.a}>
            Help Center
          </a>
          <a href="#" className={styles.a}>
            Jobs
          </a>
          <a href="#" className={styles.a}>
            Cookies
          </a>
          <a href="#" className={styles.a}>
            Legal Notices
          </a>
        </div>

        <div className={styles.col}>
          <a href="#" className={styles.a}>
            Account
          </a>
          <a href="#" className={styles.a}>
            Ways to watch
          </a>
          <a href="#" className={styles.a}>
            Cooporate Information
          </a>
          <a href="#" className={styles.a}>
            Only on Netflix
          </a>
        </div>

        <div className={styles.col}>
          <a href="#" className={styles.a}>
            Media Center
          </a>
          <a href="#" className={styles.a}>
            Terms of Use
          </a>
          <a href="#" className={styles.a}>
            Contact Us
          </a>
        </div>
      </div>
      <button className={styles.lanBtn}>
        English
        <Image src={downIcon} className={styles.downIcon} />
      </button>
      <p className={copyrightTxt}>Netflix Malawi</p>
    </div>
  );
};

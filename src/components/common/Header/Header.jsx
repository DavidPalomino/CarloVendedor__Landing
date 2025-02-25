import styles from "./Header.module.css";
import { useState, useEffect } from "react";
import { Menu } from "../Menu/Menu";

import logo from "../../../assets/images/Logo.svg";
import menuIcon from "../../../assets/images/MenuIcon.svg";
import closeIcon from "../../../assets/images/CloseIcon.svg";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);

  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsTransparent(false);
      } else {
        setIsTransparent(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  return (
    <div
      className={`${styles.headerSection} ${
        isTransparent ? styles.transparent : styles.solid
      }`}
    >
      <div className={styles.content}>
        <img
          src={logo}
          className={!isTransparent ? styles.invertLogoColor : {}}
        />
        <div className={styles.buttons}>
          <button
            className={`${styles.beDealer} ${
              isTransparent ? styles.hidden : styles.visible
            }`}
          >
            Quiero ser dealer
          </button>
          <button onClick={openMenu} className={`${styles.menuButton} ${!isTransparent && styles.visibleBorder}`}>
            <span className={styles.textWrapper}>
              {!isMenuOpen ? "Menú" : "Cerrar"}
            </span>
            <img
              src={!isMenuOpen ? menuIcon : closeIcon}
              className={styles.menuIcon}
            />
          </button>
        </div>
      </div>
      {isMenuOpen && <Menu />}
    </div>
  );
};

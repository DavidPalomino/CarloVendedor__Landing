import styles from "./Header.module.css";
import { useState, useEffect } from "react";

import logo from "../../../assets/images/Logo.svg";
import menuIcon from "../../../assets/images/MenuIcon.svg";
import closeIcon from "../../../assets/images/CloseIcon.svg";
import menuItemOne from "../../../assets/images/Menu__First__Item.jpg";
import menuItemTwo from "../../../assets/images/Menu__Secont__Item.jpg";
import fbIcon from "../../../assets/images/icons/FbGrayIcon.svg";
import igIcon from "../../../assets/images/icons/IgGrayIcon.svg";
import tiktokIcon from "../../../assets/images/icons/TikTokGrayIcon.svg";

export const Header = ({windowSize}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);
  const [aux, setAux] = useState(true)

  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setAux(false)
        setIsTransparent(false);
      } else {
        setAux(true)
        setIsTransparent(true);
      }
    };

    if (isMenuOpen) {
      setIsTransparent(false)
      document.body.style.overflow = "hidden";
    } else {
      if(aux == false && isTransparent == false){
      setIsTransparent(false)
    }else{
      setIsTransparent(true)
    }
      document.body.style.overflow = "auto";
    }
    window.addEventListener("scroll", handleScroll);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  return (
    <>
    <div
      className={`${styles.headerSection} ${
        isTransparent ? styles.transparent : styles.solid
      }`}
    >
      <div className={styles.content}>
        <img
          src={logo}
          className={`${styles.header__logo} ${(!isTransparent ? styles.invertLogoColor : {})}`}
        />
        {windowSize.width >= 500 ? (
        <div className={styles.buttons}>
          <button className={`${styles.beDealer} ${ isTransparent ? styles.hidden : styles.visible}`}>
            Quiero cotizar
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
        ):(
          <div className={styles.buttons}>
          <button className={`${styles.beDealer} ${ isTransparent ? styles.hidden : styles.visible}`}>
            Quiero cotizar
          </button>
          
          <button onClick={openMenu} className={`${styles.menuButton} ${ isTransparent ? styles.hidden : styles.visibleMenuButton}`}>
          <img
              src={menuIcon}
              className={`${styles.menuIcon} ${!isTransparent && styles.visibleImg}`}/>
          </button>

          <button onClick={openMenu} className={`${styles.menuButton} ${!isTransparent && styles.hidden}`}>
            Menú
              <img
              src={menuIcon}
              className={`${styles.menuIcon} ${!isTransparent && styles.hidden}`}/>
          </button>
          </div>
      )}
      </div>
    </div>
    {isMenuOpen ? (
      <section className={styles.menu}>
        
      </section>
    ) : ""}
    </>
  );
};

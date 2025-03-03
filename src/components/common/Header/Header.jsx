import styles from "./Header.module.css";
import { useState, useEffect } from "react";

import logo from "../../../assets/images/Logo.svg";
import menuIcon from "../../../assets/images/MenuIcon.svg";
import closeIcon from "../../../assets/images/CloseIcon.svg";
import menuItemOne from "../../../assets/images/Menu__First__Item.svg";
import menuItemTwo from "../../../assets/images/Menu__Secont__Item.svg";
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
      if(aux == isTransparent){
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
        {windowSize.width > 393 ? (
        <div className={styles.buttons}>
          <button className={`${styles.beDealer} ${ isTransparent ? styles.hidden : styles.visible}`}>
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
        ):(
          <div className={styles.buttons}>
          <button className={`${styles.beDealer} ${ isTransparent ? styles.hidden : styles.visible}`}>
            Quiero ser dealer
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
      <div className={styles.menu}>
        <div className={styles.menu__container}>
        <div className={styles.menu__content}>
          <section className={styles.items__section}>
           <div className={styles.item}>
             <img src={menuItemOne}/>
           </div>
           <div className={styles.item}>
           <img src={menuItemTwo}/>
           </div>
         </section>
         <section className={styles.links__content}>
          <section className={styles.text__items}>
          <p className={styles.item__text}>Servicios</p>
          <p className={styles.item__text}>Subastas</p>
          <p className={styles.item__text}>¿Cómo vender mi auto?</p>
          <p className={styles.item__text}>¿Cómo ser Dealer?</p>
          <p className={styles.item__text}>Premios y certificados</p>
          <p className={styles.item__text}>Preguntas frecuentes</p>
          </section>
          <section className={styles.social__icons}>
            <a href="#" className={styles.icon}> <img src={fbIcon} /> </a>
            <a href="#" className={styles.icon}> <img src={igIcon} /> </a>
            <a href="#" className={styles.icon}> <img src={tiktokIcon} /> </a>
          </section>
      </section>
        </div>
        </div>
      </div>
    ) : (
      <></>
    )}
    </>
  );
};

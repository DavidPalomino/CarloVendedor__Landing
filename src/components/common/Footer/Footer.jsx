import styles from "./Footer.module.css";
import fbIcon from "../../../assets/images/icons/FbIcon.svg";
import igIcon from "../../../assets/images/icons/IgIcon.svg";
import tiktokIcon from "../../../assets/images/icons/TikTokIcon.svg";
import logo from "../../../assets/images/Logo.svg";
import locationIcon from "../../../assets/images/icons/LocationIcon.svg";
import MailIcon from "../../../assets/images/icons/MailIcon.svg";
import ClockIcon from "../../../assets/images/icons/ClockIcon.svg";
import PhoneIcon from "../../../assets/images/icons/PhoneIcon.svg";
import GoogleIcon from "../../../assets/images/icons/GoogleIcon.svg";
import CopyRightIcon from "../../../assets/images/icons/CopyRightIcon.svg";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <div className={styles.first__content}>
        <section className={styles.icons__section}>
          <img src={logo} className={styles.logo}/>
          <button className={styles.beDealerButton}>Quiero ser dealer</button>
          <div className={styles.icons}>
            <a href="#" className={styles.icon}> <img src={fbIcon} /> </a>
            <a href="#" className={styles.icon}> <img src={igIcon} /> </a>
            <a href="#" className={styles.icon}> <img src={tiktokIcon} /> </a>
          </div>
        </section>
        <section className={styles.actions}> 
          <p className={styles.footer__paragraphs}>Comprar un auto</p>
          <p className={styles.footer__paragraphs}>Vender mi auto</p>
          <p className={styles.footer__paragraphs}>Servicios</p>
          <p className={styles.footer__paragraphs}>Subastas</p>
        </section>
        <section className={styles.actions}>
        <p className={styles.footer__paragraphs}>¿Cómo vender mi auto?</p>
          <p className={styles.footer__paragraphs}>¿Cómo ser Dealer?</p>
          <p className={styles.footer__paragraphs}>Premios y certificados</p>
          <p className={styles.footer__paragraphs}>Preguntas frecuentes</p>
        </section>
        </div>
        <div className={styles.second__content}>
            <button className={styles.main__page__button}>
              Visita nuestra web
            </button>
            <section className={styles.information}>
              <div className={styles.information__container}>
                <img src={locationIcon}/>
                <p className={styles.information__text}>Cerro Azul 421, Santiago de Surco, Lima</p>
              </div>
              <div className={styles.information__container}>
                <img src={ClockIcon}/>
                <p className={styles.information__text}>Atencion de 9:00am a 6:00pm</p>
              </div>
              <div className={styles.information__container}>
                <img src={MailIcon}/>
                <p className={styles.information__text}>contacto@carlo.pe</p>
              </div>
              <div className={styles.information__container}>
                <img src={PhoneIcon}/>
                <p className={styles.information__text}>+51 934 140 010</p>
              </div>
            </section>
            <img src={GoogleIcon}/>
        </div>
        <div className={styles.third__content}>
        <section className={styles.company__info}>
          <div className={styles.company__info__text}>
            <img src={CopyRightIcon}/>
            <p className={styles.copyright__text}>MOVE TECHNOLOGIES S.A.C. 20603667451</p>
          </div>
          <div className={styles.legal__link__text}>
            <p className={styles.link__text}>Avisos legales</p>
            <p className={styles.link__text}>Políticas de privacidad</p>
            <p className={styles.link__text}>Términos y condiciones</p>
          </div>
        </section>
        </div>
      </div>
    </footer>
  );
};

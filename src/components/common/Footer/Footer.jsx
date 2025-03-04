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

export const Footer = ({windowSize}) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
    {windowSize.width > 768 ? (
      <section className={styles.footer__section__first}>
         <div className={styles.a}>
            <img src={logo} className={styles.logo}/>
            <button className={styles.beDealer}>Quiero ser dealer</button>
            <div className={styles.icons__social}>
            <img src={fbIcon}/>
            <img src={igIcon}/>
            <img src={tiktokIcon}/>
            </div>
         </div>
         <div className={styles.b}>
          <p>Comprar un auto</p>
          <p>Vender auto</p>
          <p>Servicios</p>
          <p>Subastas</p>
         </div>
         <div className={styles.b}>
          <p>¿Cómo vender mi auto?</p>
          <p>¿Cómo ser Dealer?</p>
          <p>Premios y certificados</p>
          <p>Preguntas frecuentes</p>
         </div>
      </section>
    ):(
      <section className={styles.footer__section__first}>
         <div className={styles.a}>
            <img src={logo} className={styles.logo}/>
            <button className={styles.beDealer}>Quiero ser dealer</button>
            <div className={styles.icons__social}>
            <img src={fbIcon}/>
            <img src={igIcon}/>
            <img src={tiktokIcon}/>
            </div>
         </div>
         <div className={styles.first__section__container}>
         <div className={styles.b}>
          <p>Comprar un auto</p>
          <p>Vender auto</p>
          <p>Servicios</p>
          <p>Subastas</p>
         </div>
         <div className={styles.b}>
          <p>¿Cómo vender mi auto?</p>
          <p>¿Cómo ser Dealer?</p>
          <p>Premios y certificados</p>
          <p>Preguntas frecuentes</p>
         </div>
         </div>
      </section>
    )}
      <section className={styles.footer__section__second}>
      <button className={styles.web__button}>Visita nuestra web</button>
      <div className={styles.information__container}>
        <div className={styles.information}>
          <img src={locationIcon}/>
          <p>Cerro Azul 421, Santiago de Surco, Lima</p>
        </div>
        <div className={styles.information}>
          <img src={ClockIcon}/>
          <p>Atencion de 9:00am a 6:00pm</p>
        </div>
        <div className={styles.information}>
          <img src={MailIcon}/>
          <p>contacto@carlo.pe</p>
        </div>
        <div className={styles.information}>
          <img src={PhoneIcon}/>
          <p>+51 934 140 010</p>
        </div>
      </div>
      <img src={GoogleIcon} className={styles.googleIcon}/>
      </section>
      {/* <section className={styles.footer__section__three}>
      <div className={styles.information}>
        <img src={CopyRightIcon}/>
        <p className={styles.copyright__text}>MOVE TECHNOLOGIES S.A.C. 20603667451</p>
      </div>
      <div className={styles.legal__links}>
        <p>Avisos legales</p>
        <p>Políticas de privacidad</p>
        <p>Términos y condiciones</p>
      </div>
      </section> */}
      </div>
    </footer>
  );
};

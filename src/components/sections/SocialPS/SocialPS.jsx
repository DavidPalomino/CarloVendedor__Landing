import styles from "./SocialPS.module.css";
import socialImg from "../../../assets/images/SocialImg.svg";

export const SocialPS = ({windowSize}) => {
  return (
    <div className={styles.rectangle}>
      <div className={styles.header}>
        <div className={styles.header__squeare_text}>Somos tu aliado</div>
        <h1 className={styles.header__title}>¿Por qué aceptar la primera oferta si {windowSize.width > 502 ? <br/>:""} puedes recibir más?</h1>
        <p className={styles.header__paragraph}>Publica en nuestras subastas, recibe varias ofertas y{windowSize.width < 502 ? <br/>:""} elige la mejor.</p>
      </div>
        <div className={styles.content__img}>
          <img src={socialImg} />
        </div>
        <button className={styles.beDealerButton}>Quiero Vender</button>
    </div>
  );
};

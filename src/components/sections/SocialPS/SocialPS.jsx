import styles from "./SocialPS.module.css";
import socialImg from "../../../assets/images/SocialImg.svg";
import purpleThing from "../../../assets/images/purpleThing.svg";

export const SocialPS = () => {
  return (
    <div className={styles.rectangle}>
      <div className={styles.header}>
        <div className={styles.header__squeare_text}>Usuarios reales</div>
        <h1 className={styles.header__title}>Una plataforma para todos</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.img}>
          <img src={socialImg} />
        </div>
        <div className={styles.content_text}>
          <img src={purpleThing} className={styles.prupleImg}/>
          <div className={styles.text__container}>
          <h1 className={styles.text__container_title}>
            Negocios justos y conexiones reales para un mercado más inteligente.
          </h1>
          <p className={styles.text__container_paragraph}>
            Forma parte de una red de dealers que negocian con confianza,
            seguridad y visión estratégica. Da el siguiente paso y accede a
            oportunidades exclusivas.
          </p>
          <p className={styles.text__container_paragraph}>
          Tu próxima oportunidad está a un clic de distancia.</p>
          <button className={styles.beDealer}>Quiero ser dealer</button>
        </div>
        </div>
      </div>
      <div className={styles.brands}>
      </div>
    </div>
  );
};

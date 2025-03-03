import styles from "./SocialPS.module.css";
import { BrandCarrusel } from "../../common/BrandCarrusel/BrandCarrusel";
import socialImg from "../../../assets/images/SocialImg.svg";
import purpleThing from "../../../assets/images/purpleThing.svg";
import prupleImgMobile from "../../../assets/images/prupleImgMobile.svg";

export const SocialPS = ({windowSize}) => {
  return (
    <div className={styles.rectangle}>
      <div className={styles.header}>
        <div className={styles.header__squeare_text}>Usuarios reales</div>
        <h1 className={styles.header__title}>Una plataforma para dealers</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.content__img}>
          <img src={socialImg} />
        </div>
        <div className={styles.content_text}>
          <img src={windowSize > 768 ? purpleThing : prupleImgMobile} className={styles.prupleImg} />
          <div className={styles.container}>
            <div className={styles.text__container}>
              <h1 className={styles.text__container_title}>
                Que tu negocio no pare: compra autos verificados
              </h1>
              <p className={styles.text__container_paragraph}>
                En CARLO, subastamos vehículos inspeccionados directamente de
                particulares, para que puedas comprar con confianza y garantía.
                No subastamos vehículos siniestrados ni recuperados por
                financieras, solo vehículos verificados.
              </p>
              <p className={styles.text__container_paragraph}>
                Tu próxima oportunidad está a un clic de distancia.
              </p>
            </div>
            <button className={styles.beDealer}>Quiero ser dealer</button>
          </div>
        </div>
      </div>
      <div>
      {/* <BrandCarrusel/> */}
      </div>
    </div>
  );
};

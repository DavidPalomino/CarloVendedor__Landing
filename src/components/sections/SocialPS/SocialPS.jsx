import styles from "./SocialPS.module.css";
import { BrandCarrusel } from "../../common/BrandCarrusel/BrandCarrusel";
import socialImg from "../../../assets/images/SocialImg.jpg";
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
        <section className={styles.content__text}>
          {windowSize >= 901 ?
          <img src={purpleThing} className={styles.social__deco}/> :
          <img src={prupleImgMobile} className={styles.social__deco}/>
          }
          <div className={styles.text__container}>
            <div className={styles.text__subcontent}>
            <h1 className={styles.text__container__title}>Que tu negocio no <br/>pare: compra autos verificados</h1>
            <div className={styles.paragraph__contaier}>
              <p className={styles.paragraph__contaier__text}>En CARLO, subastamos vehículos inspeccionados directamente de particulares, para que puedas comprar con confianza y garantía. No subastamos vehículos siniestrados ni recuperados por financieras, solo vehículos verificados.</p>
              <p className={styles.paragraph__contaier__text}>Tu próxima oportunidad está a un clic de distancia.</p>
            </div>
            </div>
            <button className={styles.beDealer}>Quiero ser dealer</button>
          </div>
        </section>
      </div>
      <div>
      <BrandCarrusel/>
      </div>
    </div>
  );
};

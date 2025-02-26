import styles from "./HowItWorks.module.css";
import stepOneImg from "../../../assets/images/StepOne.svg";
import stepTwoImg from "../../../assets/images/StepTwo.svg";
import stepThreeImg from "../../../assets/images/StepThree.svg";
import stepFourImg from "../../../assets/images/StepFour.svg";

export const HowItWorks = () => {
  return (
    <div className={styles.rectangle}>
      <div className={styles.header}>
        <div className={styles.header__squeare_text}>Nuestro proceso</div>
        <h1 className={styles.header__title}>¿Cómo convertirte en dealer?</h1>
      </div>
      <div className={styles.steps}>
        <div className={styles.steps__one}>
          <div className={styles.content__text}>
            <div className={styles.text__container}>
              <h1 className={styles.content__number}>1</h1>
              <div className={styles.container__text}>
                <h1 className={styles.container__text__title}>
                  Regístrate y verifica tu cuenta
                </h1>
                <p className={styles.container__text__paragraph}>
                  Únete a CARLO Subastas y accede al mejor stock de autos
                  verificados. Completa tu registro y verifica tu cuenta para
                  comenzar el proceso ¡Es gratis!
                </p>
                <a className={styles.container__text__anchor}>
                  Regístrate ahora
                </a>
              </div>
            </div>
          </div>
          <div>
            <img src={stepOneImg} />
          </div>
        </div>
        <div className={styles.steps__two}>
          <div
            className={`${styles.content__text} $ ${styles.stepTwo__container__color}`}
          >
            <div className={styles.text__container}>
              <h1
                className={`${styles.content__number} ${styles.stepTwo__number__color}`}
              >
                2
              </h1>
              <div className={styles.container__text}>
                <h1
                  className={`${styles.container__text__title} ${styles.stepTwo__title__color}`}
                >
                  Explora nuestro stock de vehículos
                </h1>
                <p
                  className={`${styles.container__text__paragraph} ${styles.stepTwo__paragraph__color}`}
                >
                  Accede a nuestro catálogo de vehículos verificados con 180
                  puntos de inspección y revisa fotos, estado mecánico, estético
                  y legal antes de pujar. ¡Encuentra la mejor opción para tu
                  negocio!
                </p>
              </div>
            </div>
          </div>
          <div>
            <img src={stepTwoImg} className={styles.macImg} />
          </div>
        </div>
        <div className={styles.steps__one}>
          <div className={styles.content__text}>
            <div className={styles.text__container}>
              <h1 className={styles.content__number}>3</h1>
              <div className={styles.container__text}>
                <h1 className={styles.container__text__title}>
                  Empieza a pujar desde cualquier dispositivo en tiempo real{" "}
                </h1>
                <p className={styles.container__text__paragraph}>
                  Desde tu celular, tablet o computadora, puja en tiempo real en
                  las subastas. Haz tus ofertas al instante y ¡Recibirás una
                  notificación cuando seas el ganador!
                </p>
              </div>
            </div>
          </div>
          <div>
            <img src={stepThreeImg} />
          </div>
        </div>
        <div className={styles.steps__two}>
          <div
            className={`${styles.content__text} $ ${styles.stepTwo__container__color}`}
          >
            <div className={styles.text__container}>
              <h1
                className={`${styles.content__number} ${styles.stepTwo__number__color}`}
              >
                4
              </h1>
              <div className={styles.container__text}>
                <h1
                  className={`${styles.container__text__title} ${styles.stepTwo__title__color}`}
                >
                  Completa la compra y recoge tu auto{" "}
                </h1>
                <p
                  className={`${styles.container__text__paragraph} ${styles.stepTwo__paragraph__color}`}
                >
                  Si ganas la subasta, nuestro equipo se comunicará contigo para
                  coordinar los siguientes pasos. Solo preocúpate por recoger tu
                  auto y seguir con tu negocio.
                </p>
                <a
                  className={`${styles.container__text__anchor} ${styles.stepTwo__anchor__color}`}
                >
                  Regístrate ahora
                </a>
              </div>
            </div>
          </div>
          <div>
            <img src={stepFourImg} />
          </div>
        </div>
      </div>
    </div>
  );
};

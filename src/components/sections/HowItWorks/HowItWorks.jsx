import styles from "./HowItWorks.module.css";
import { useEffect, useRef, useState } from "react";

import stepOneImg from "../../../assets/images/StepOne.svg";
import stepTwoImg from "../../../assets/images/StepTwo.svg";
import stepThreeImg from "../../../assets/images/StepThree.svg";
import stepFourImg from "../../../assets/images/StepFour.svg";
import checkIcon from "../../../assets/images/CheckIcon.svg";
import socialVideo from "../../../assets/videos/SocialVideo.mp4";
import stepFourDecoTop from "../../../assets/images/StepFourDecoTop.svg";
import stepFourDecoBottom from "../../../assets/images/StepFourDeco.svg";

export const HowItWorks = ({windowSize}) => {

  return (
    <section className={styles.rectangle}>
      <div className={styles.header}>
        <div className={styles.header__squeare_text}>Nuestro proceso</div>
        <h1 className={styles.header__title}>¿Cómo vender tu auto rápidamente?</h1>
      </div>
      <div className={styles.steps}>
        <div className={styles.steps__one}>
          <div className={styles.content__text}>
            <div className={styles.text__container}>
              <h1 className={styles.content__number}>1</h1>
              <div className={styles.container__text}>
                <h1 className={styles.container__text__title}>
                  Cotiza tu vehículo
                </h1>
                <div className={styles.subcontainer__text}>
                <p className={styles.container__text__paragraph}>
                Valúa tu vehículo al instante con nuestra tecnología de valoración inteligente. Obtén el mejor precio de forma rápida, segura y sin complicaciones. <b>¡Hazlo! Te tomará menos de 2 minutos.</b>
                </p>
                <a className={styles.container__text__anchor}>
                Quiero Cotizar mi Auto
                </a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.step__img__container}>
            <img src={stepOneImg} />
          </div>
        </div>
        <div className={styles.steps__two}>
          <div className={`${styles.content__text} $ ${styles.stepTwo__container__color}`}
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
                  Agenda una{windowSize.width > 500 ? <br/>:""} inspección
                </h1>
                <p
                  className={`${styles.container__text__paragraph} ${styles.stepTwo__paragraph__color}`}
                >
                  Si estás de acuerdo con la cotización de tu auto, agenda una inspección donde se le hará una revisión mecánica, estética y legal. Esto nos permitirá confirmar la oferta y, si es posible, hacer ajustes para reflejar su valor real.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.step__img__container__two}>
            <img src={stepTwoImg}/>
          </div>
        </div>
        <div className={styles.steps__one}>
          <div className={styles.content__text}>
            <div className={`${styles.text__container} ${styles.container__text__three}`}>
              <h1 className={styles.content__number}>3</h1>
              <div className={styles.container__text}>
                <h1 className={`${styles.container__text__title} ${styles.step__three__mobile__title}`}>
                  Inspeccionamos tu auto en solo 30 minutos
                </h1>
                <p className={styles.container__text__paragraph}>
                <b>¡Rápido, seguro y sin complicaciones!</b> Trae tu auto a nuestro centro de inspección en la fecha seleccionada y nuestro equipo de expertos revisará tu auto en 30 minutos aprox.
                </p>
              </div>
            </div>
          </div>
          <div className={`${styles.step__img__container} ${styles.step__three__img}`}>
            <img src={stepThreeImg} />
          </div>
        </div>
        <div className={styles.steps__two}>
          <div
            className={`${styles.content__text} $ ${styles.stepTwo__container__color}`}
          >
            <img src={stepFourDecoTop} className={styles.stepFourDecoTop}/>
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
                  Revisa las ofertas en tiempo real y completa la venta
                </h1>
                <div className={styles.subcontainer__text}>
                <p
                  className={`${styles.container__text__paragraph} ${styles.stepTwo__paragraph__color}`}
                >
                  ¡Y listo! Haz el seguimiento de las pujas en tiempo real a través del link que te
                  compartiremos. Al finalizar la subasta, podrás aceptar o rechazar la oferta. En ambos casos
                  nuestro equipo se contactará contigo para coordinar los pasos finales.
                </p>
                <a
                  className={`${styles.container__text__anchor} ${styles.stepTwo__anchor__color}`}
                >
                  Quiero Cotizar Ahora
                </a>
              </div>
              </div>
            </div>
            <img src={stepFourDecoBottom} className={styles.stepFourDecoBottom}/>
          </div>
          <div className={styles.step__img__container}>
            <img src={stepFourImg} />
          </div>
        </div>
      </div>
    </section>
  );
};

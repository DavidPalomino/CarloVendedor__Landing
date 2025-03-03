import styles from "./HowItWorks.module.css";
import { useEffect, useRef, useState } from "react";

import stepOneImg from "../../../assets/images/StepOne.svg";
import stepTwoImg from "../../../assets/images/StepTwo.svg";
import stepThreeImg from "../../../assets/images/StepThree.svg";
import stepFourImg from "../../../assets/images/StepFour.svg";
import checkIcon from "../../../assets/images/CheckIcon.svg";
import socialVideo from "../../../assets/videos/SocialVideo.mp4";
export const HowItWorks = ({windowSize}) => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            videoRef.current.play().catch(error => console.error("Error al reproducir:", error));
          }, 200);
        } else {
          videoRef.current.pause();
        }
      },
      { threshold: 0.5 }
    );
  
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }
  
    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);


  const handleToggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };
  return (
    <section className={styles.rectangle}>
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
                  comenzar el proceso <b>¡Es gratis!</b>
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
                  Explora nuestro{windowSize.width <= 768 ? <br/>:""} stock de vehículos
                </h1>
                <p
                  className={`${styles.container__text__paragraph} ${styles.stepTwo__paragraph__color}`}
                >
                  Accede a nuestro catálogo de vehículos verificados con 180
                  puntos de inspección y revisa fotos, estado mecánico, estético
                  y legal antes de pujar. <b>¡Encuentra la mejor opción para tu
                  negocio!</b>
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
                <h1 className={`${styles.container__text__title} ${styles.step__three__mobile__title}`}>
                  Empieza a pujar desde cualquier dispositivo en tiempo real
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
                  Completa la compra y recoge tu auto
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
                  Quiero ser dealer
                </a>
              </div>
            </div>
          </div>
          <div>
            <img src={stepFourImg} />
          </div>
        </div>
      </div>
      <div className={styles.user}>
        <div className={styles.user__container}>
          {windowSize.width >= 768 ?
          <div className={styles.user__content}>
            <img src={checkIcon} className={styles.user__content__icon}/>
            <div className={styles.user__content__text}>
            <h1 className={styles.user__content__title}>Te contamos cómo comprar con total seguridad</h1>
            <p className={styles.user__content__paragraph}>Aprende en minutos cómo registrarte, explorar el stock de vehículos y participar en subastas en tiempo real. </p>
            <p className={styles.user__content__paragraph}>Descubre lo fácil y seguro que es comprar autos verificados para tu negocio.</p>
            </div>
            <button className={styles.beDealer}>Quiero ser dealer</button>
          </div>
           : ""}
           {windowSize.width <= 768 ? 
           <h1 className={styles.video__title}>Te contamos cómo comprar con total seguridad</h1>
            : ""}
          <section className={styles.video__container} onClick={handleToggleSound}>
              <video className={styles.video}
                ref={videoRef}
                playsInline
                muted
                loop>
                <source src={socialVideo} type="video/mp4" />
              </video>
          </section>
        </div>
      </div>
    </section>
  );
};

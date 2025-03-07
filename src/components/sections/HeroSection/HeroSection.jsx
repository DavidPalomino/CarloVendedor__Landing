import styles from "./HeroSection.module.css";
export const HeroSection = ({windowSize}) => {

  return (
    <div className={styles.heroImg}>
      {windowSize.width > 500 ? (
      <div className={styles.heroContent}>
        <div className={styles.text__container}>
        <h1 className={styles.text}>
          <div className={`${styles.backLetters} ${styles.backTop}`}/>
          ¡Más ofertas, mejor precio!
          </h1>
        <h1 className={styles.text}> 
          <div className={`${styles.backLetters} ${styles.backBottom}`}/>
          Subasta tu auto en CARLO.
        </h1>
          <h1 className={styles.text}>
          ¡Y no!, no es rematarlo, es <br/>venderlo mejor 😎
        </h1>
        </div>
        <button className={styles.beDealerButton}>Quiero cotizar</button>
        </div>
      ) : (
      <div className={styles.heroContent}>
        <div className={styles.text__container}>
            <h1 className={styles.text}>
              <div className={`${styles.backLetters} ${styles.backTop}`}/>
              ¡Más ofertas, mejor
            </h1>
            <h1 className={styles.text}> 
              <div className={`${styles.backLetters} ${styles.backMiddle}`}/>
              precio! Subasta tu
            </h1>
            <h1 className={styles.text}>
            <div className={`${styles.backLetters} ${styles.backBottom}`}/>
            auto en CARLO. 
            </h1>
              <h1 className={styles.text}>
              ¡Y no!, no es rematarlo, es venderlo mejor 😎
            </h1>
          </div>
            <button className={styles.beDealerButton}>Quiero cotizar</button>
          </div>
      )}
      </div>
  );
};

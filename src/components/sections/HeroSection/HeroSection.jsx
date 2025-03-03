import styles from "./HeroSection.module.css";
export const HeroSection = ({windowSize}) => {

  return (
    <div className={styles.heroImg}>
      {windowSize.width > 430 ? (
      <div className={styles.heroContent}>
        <div className={styles.text__container}>
        <h1 className={styles.text}>
          <div className={`${styles.backLetters} ${styles.backTop}`}/>
          ¿Te dedicas a comprar y
          </h1>
        <h1 className={styles.text}> 
          <div className={`${styles.backLetters} ${styles.backBottom}`}/>
          vender autos? 
        </h1>
          <h1 className={styles.text}>
            Únete a CARLO y consigue <br/>lo mejor del mercado.
        </h1>
        </div>
        <button className={styles.beDealerButton}>Quiero ser dealer</button>
        </div>
      ) : (
      <div className={styles.heroContent}>
        <div className={styles.text__container}>
            <h1 className={styles.text}>
              <div className={`${styles.backLetters} ${styles.backTop}`}/>
              ¿Te dedicas a
            </h1>
            <h1 className={styles.text}> 
              <div className={`${styles.backLetters} ${styles.backMiddle}`}/>
              comprar y vender 
            </h1>
            <h1 className={styles.text}>
            <div className={`${styles.backLetters} ${styles.backBottom}`}/>
            autos? 
            </h1>
              <h1 className={styles.text}>
                Únete a CARLO y <br/>consigue lo mejor<br/> del mercado.
            </h1>
          </div>
            <button className={styles.beDealerButton}>Quiero ser dealer</button>
          </div>
      )}
      </div>
  );
};

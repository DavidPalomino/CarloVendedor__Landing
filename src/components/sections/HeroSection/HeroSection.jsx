import styles from "./HeroSection.module.css";

export const HeroSection = () => {
  return (
    <div className={styles.heroImg}>
      <div className={styles.heroContent}>
      <h1 className={styles.text}>
        <div className={`${styles.backLetters} ${styles.backTop}`}/>
        ¿Te dedicas a comprar y
        <div className={`${styles.backLetters} ${styles.backBottom}`}/>
        vender autos? 
        <br/>
        Únete a CARLO y consigue lo mejor del mercado.
      </h1>
      <button className={styles.beDealerButton}>Quiero ser dealer</button>
      </div>
    </div>
  );
};

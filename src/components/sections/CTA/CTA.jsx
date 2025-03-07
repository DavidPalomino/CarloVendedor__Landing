import styles from "./CTA.module.css";

export const CTA = ({windowSize}) => {
  return (
    <div className={styles.CTAimg}>
      {windowSize.width >= 500 ? (
      <div className={styles.CTA__content}>
        <h1 className={styles.text}>Vender tu auto</h1>
        <h1 className={styles.text__jump}>
          <div className={styles.backLetters} />
          nunca fue tan fácil.
        </h1>
        <p className={styles.text__paragraph}>
        Consigue la mejor oferta en tiempo récord y sin complicaciones. Nuestra tecnología te garantiza un proceso rápido, seguro y sin estrés.
        </p>
        <button className={styles.beDealerButton}>Quiero Vender</button>
      </div>
      ): (
        <div className={styles.CTA__content}>
        <h1 className={styles.text}>Vender tu</h1>
        <h1 className={styles.text__jump}>
          <div className={`${styles.backLetters} ${styles.backTop}`} />
          auto nunca 
        </h1>
        <h1 className={styles.text__jump}>
          <div className={`${styles.backLetters} ${styles.backBottom}`} />
          fue tan fácil.
        </h1>
        <p className={styles.text__paragraph}>
        Consigue la mejor oferta en tiempo récord y sin complicaciones. Nuestra tecnología te garantiza un proceso rápido, seguro y sin estrés.
        </p>
        <button className={styles.beDealerButton}>Quiero Vender</button>
      </div>
      )}
    </div>
  );
};

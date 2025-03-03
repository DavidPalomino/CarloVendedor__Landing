import styles from "./CTA.module.css";

export const CTA = ({windowSize}) => {
  return (
    <div className={styles.CTAimg}>
      {windowSize.width >= 768 ? (
      <div className={styles.CTA__content}>
        <h1 className={styles.text}>Empieza hoy y accede a los</h1>
        <h1 className={styles.text__jump}>
          <div className={styles.backLetters} />
          mejores autos en subasta
        </h1>
        <p className={styles.text__paragraph}>
          Nuevo stock cada día para que nunca te falte inventario. Filtra, puja
          y gana las mejores unidades <b>sin intermediarios ni riesgos.</b>
        </p>
        <button className={styles.beDealerButton}>Quiero ser dealer</button>
      </div>
      ): (
        <div className={styles.CTA__content}>
        <h1 className={styles.text}>Empieza hoy y {windowSize.width <= 768 ? <br/>:""}accede a los</h1>
        <h1 className={styles.text__jump}>
          <div className={`${styles.backLetters} ${styles.backTop}`} />
          mejores autos
        </h1>
        <h1 className={styles.text__jump}>
          <div className={`${styles.backLetters} ${styles.backBottom}`} />
          en subasta
        </h1>
        <p className={styles.text__paragraph}>
          Nuevo stock cada día para que nunca te falte inventario. Filtra, puja
          y gana las mejores {windowSize.width <= 768 ? <br/>:""} unidades <b>sin intermediarios ni riesgos.</b>
        </p>
        <button className={styles.beDealerButton}>Quiero ser dealer</button>
      </div>
      )}
    </div>
  );
};

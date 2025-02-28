import styles from "./CTA.module.css";

export const CTA = () => {
  return (
    <div className={styles.CTAimg}>
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
    </div>
  );
};

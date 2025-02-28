import styles from "./CTA.module.css";

export const CTA = () => {
  return (
    <div className={styles.CTAimg}>
      <div className={styles.heroContent}>
        <h1 className={styles.text}>
          Empieza hoy y accede a los 
          <div className={styles.backLetters} />
          mejores autos en subasta
        </h1>
        <p>Nuevo stock cada día para que nunca te falte inventario. Filtra, puja y gana las mejores unidades sin intermediarios ni riesgos.</p>
        <button className={styles.beDealerButton}>Quiero ser dealer</button>
      </div>
    </div>
  );
};

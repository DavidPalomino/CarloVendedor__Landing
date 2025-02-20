import styles from "./Menu.module.css";
export const Menu = () => {
  return (
    <div className={styles.rectangle}>
      <div className={styles.menuContent}>
        <div className={styles.QA}>Preguntas</div>
        <div className={styles.actions}>Acciones</div>
      </div>
    </div>
  );
};

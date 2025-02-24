import styles from './BrandCarrusel.module.css'
import placeHolder from '../../../assets/images/Volkswagen.svg'

export const BrandCarrusel = () => {
  const logos = new Array(10).fill(placeHolder);

  return (
    <div className={styles.carrusel}>
      <div className={styles.track}>
        {logos.concat(logos).map((logo, index) => (
          <img key={index} src={logo} alt="Brand Logo" />
        ))}
      </div>
    </div>
  )
}

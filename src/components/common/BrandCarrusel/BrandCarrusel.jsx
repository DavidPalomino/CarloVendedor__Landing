import styles from './BrandCarrusel.module.css'
import Audi from '../../../assets/images/brands/Audi.svg'
import BMW from '../../../assets/images/brands/BMW.svg'
import Chevrolet from '../../../assets/images/brands/Chevrolet.svg'
import Fiat from '../../../assets/images/brands/Fiat.svg'
import Ford from '../../../assets/images/brands/Ford.svg'
import Hyundai from '../../../assets/images/brands/Hyundai.svg'
import KIA from '../../../assets/images/brands/KIA.svg'
import Mercedes from '../../../assets/images/brands/Mercedes-Benz.svg'
import Nissan from '../../../assets/images/brands/Nissan.svg'
import Ssangyong from '../../../assets/images/brands/Ssangyong.svg'
import Toyota from '../../../assets/images/brands/Toyota.svg'
import Volkswagen from '../../../assets/images/brands/Volkswagen.svg'


export const BrandCarrusel = () => {
  const logos = [ Audi ,BMW, Chevrolet, Fiat, Ford,Hyundai, KIA, Mercedes,Nissan,Ssangyong, Toyota, Volkswagen,]

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

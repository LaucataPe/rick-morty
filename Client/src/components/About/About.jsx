import styles from './About.module.css'
import loc from '../../img/loc.png'
import yo from '../../img/yo.jpg'

const About = () =>{
    return(
        <div className={styles.detail}>
          <div className={styles.text}>          
          <div className={styles.info}>
            <p className={styles.status}><strong>Status: </strong>Alive</p>
            <p className={styles.gender}><strong>Gender: </strong>Female</p>
            <p className={styles.species}><strong>Especie: </strong>Human</p>
          </div>
          <h1>Laura Pérez</h1>
          <p className={styles.origen}><img src={loc} alt="icono location"/><span>Bogotá - Earth (C-137)</span></p>
          </div>

          <img src={yo} alt='Mi foto'/>
        </div>
    )
}

export default About;
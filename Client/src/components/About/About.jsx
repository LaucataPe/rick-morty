import styles from './About.module.css'
import loc from '../../img/loc.png'
import yo from '../../img/me.png'

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
          <p className={styles.des}>Hola! Mi nombre es Laura, soy una amante de la tecnología y las nuevas tendencias digitales,
              desarrolladora Full Stack con experiencia en Js, React, Redux, Express y que asiempre está al día con las 
              tendencias de diseño web, espero te haya gustado esta aplicaión de los personajes de Rick and Morty
          </p>
          <p className={styles.origen}><img src={loc} alt="icono location"/><span>Bogotá - Earth (C-137)</span></p>
          </div>

          <img src={yo} alt='Mi foto'/>
        </div>
    )
}

export default About;
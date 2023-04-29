import axios from 'axios';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import loc from '../../img/loc.png'
import back from '../../img/back.png'
import styles from './Detail.module.css'

import { Link } from 'react-router-dom';

/*API*/
const url = 'https://be-a-rym.up.railway.app/api/character';
const key = 'c5e0b28c0acc.03d24138fac376f12a97';

export default function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
  }, [id]);

    let color;
    if (character.status === "Alive"){color = styles.green}
    else{ color = styles.red}

    const {origin} = character;
    return (
      <>
        <div className={styles.detail}>
          <div className={styles.text}>          
          <div className={styles.info}>
            <p className={color}><strong>Status: </strong>{character.status}</p>
            <p className={styles.gender}><strong>Gender: </strong>{character.gender}</p>
            <p className={styles.species}><strong>Especie: </strong>{character.species}</p>
          </div>
          {/* <h5>#{character.id}</h5> */}
          <h1>{character.name}</h1>
          <p className={styles.origen}><img src={loc} alt="icono location"/>{origin}</p>
          </div>

          <img src={character.image} alt={character.name}/>
        </div>
        <Link to='/home'><img src={back} alt="back icon" className={styles.back}/></Link>
      </>
    );
}
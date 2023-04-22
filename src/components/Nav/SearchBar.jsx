import React, { useState } from 'react';
import styles from './Nav.module.css'
import { Link } from 'react-router-dom';

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState('');

  const handleChange = (event) => {
    setId(event.target.value);
  };
  
  return (
    <div className={styles.search}>
      <input type="search" value={id} onChange={handleChange} className={styles.searchbar}/>
      <Link to='/home'><button onClick={() => {
        onSearch(id) 
        setId('')
        }}>Agregar</button></Link>
    </div>
  );
}

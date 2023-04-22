import React from 'react'
import { useState } from 'react';
import validate from '../validation';
import styles from './Form.module.css'
import rick from '../../img/dap.png'
import Swal from 'sweetalert2'

export default function Form ({ login }) {
  const [userData, setuserData] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})

  const handleChange = (e) =>{
    setuserData({
      ...userData,
      [e.target.name]: e.target.value
    })

    setErrors(validate({
      ...userData,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e) =>{
    e.preventDefault();

    if (Object.keys(errors).length === 0) {
        login(userData);
        setuserData({ email: '', password: '' })
    }else{
        return Swal.fire({title: 'Los datos no son correctos',icon: 'error',confirmButtonText: 'Cerrar'})
    }
  }


  

  return(
    <div className={styles.page}>
      <h1 className={styles.title}>Welcome to the Rick & Morty App</h1>


      <form className={styles.form} onSubmit={handleSubmit}>
        <img src={rick} alt="Rick and Morty Dap"/>

        <label htmlFor="email">User</label>
        <input type="text" name='email' className={errors.email} value={userData.email} onChange={handleChange} required/>
        {errors.email !== '' ? <p className={styles.danger}><strong>{errors.email}</strong></p> : <p></p> }

        <label htmlFor="password">Password</label>
        <input type="text" name='password' className={errors.password} value={userData.password} onChange={handleChange} required/>
        {errors.password !== '' ? <p className={styles.danger}><strong>{errors.password}</strong></p> : <p></p> }

        <button type="submit">Submit</button>

      </form>
    </div>
  )
}
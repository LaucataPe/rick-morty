  const regPass = /^(?=\S*?[0-9]).{6,10}\S$/;
  const regEmail = /^([A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}).{0,35}$/i

  export default function validate(inputs){
    let errors = {}
    if (!regEmail.test(inputs.email)) errors.email = "Ingresa un correo válido (Max: 35 caracteres)" 
    if (!regPass.test(inputs.password)) errors.password = "La contraseña debe contener: Un numero y tener entre 6 a 10 caracteres"
    return errors
  } 

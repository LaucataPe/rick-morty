import Card from './Card';
import styles from './Cards.module.css'

export default function Cards({characters, onClose, title}) {
   return(
      <>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.contenedor}>
         
         {characters.map( (personaje) => {
            const {id, name, status, image} = personaje;
            return (
               <Card 
                  key={id}
                  id={id}
                  name={name}            
                  status={status}                      
                  image={image} 
                  onClose={onClose}           
            />)}
         )}
      </div>
      </> 
   ) 
}



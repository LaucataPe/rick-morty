/*Routing*/
import { Link } from "react-router-dom";
/*React State*/
import { useEffect, useState } from "react";
/*Redux*/
import { connect } from "react-redux";
import { addFav,removeFav } from "../../redux/actions";
/*Estilos*/
import styles from './Cards.module.css'


export function Card(props) {
   const {id, name, status, image, onClose, gender} = props
   const [isFav, setIsFav] = useState(false)

   useEffect(() => {
      props.allCharacters.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.allCharacters, id]);

   const handleFavorite = (id) =>{
      if(isFav === false){
         setIsFav(true)
         props.addFav({id, name, status, image, onClose, gender})
      } else if (isFav === true){
         setIsFav(false)
         props.removeFav(id)
      } 
   }

   return ( 
      <div key={id} className={styles.card}>
         <img src={image} alt={name} className={styles.image}/> 
         {onClose !== false && <button className={styles.close} onClick={() => onClose(id)}>X</button>}
         <div className={styles.text}>
            {
            isFav ? (
            <button className={styles.like} onClick={() => handleFavorite(id)}>❤️</button>
            ) : (
            <button className={styles.like} onClick={() => handleFavorite(id)}>🤍</button>
            )
            }
            <h2>{name}</h2>
            <h3 className={styles.status}>Status: {status}</h3>        
            <Link to={`/detail/${id}`}><button className={styles.info}>+</button></Link>
         </div>
      </div>
   );
}

const mapStateToProps = (state) =>{
   return { 
      myFavorites: state.myFavorites, 
      allCharacters: state.allCharacters
   }
}

const mapDispatchToProps = (dispatch) =>{
   return{
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id))
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card);
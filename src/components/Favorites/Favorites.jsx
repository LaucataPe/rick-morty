import Cards from "../Cards/Cards";
/*Redux*/
import { connect, useDispatch } from "react-redux";
import { filterCards, orderCards, resetCards } from "../../redux/actions";
import { useState } from "react";

import styles from './Favorites.module.css'

export function Favorites({myFavorites}) {
    console.log(myFavorites);
    const dispatch = useDispatch()
    const [aux, setAux] = useState(false)

    const handleOrder = (event) =>{
        dispatch(orderCards(event.target.value))
        setAux(true)
    }
    const handleFilter = (event) =>{
        dispatch(filterCards(event.target.value))
    }

    return (
        <>
            <div className={styles.filters}>
                <select onChange={handleOrder}>
                    <option value="A">Ascendente</option>
                    <option value="D">Descendente</option>
                </select>
                <select onChange={handleFilter}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                </select>
                <button onClick={() => dispatch(resetCards())}>Reset</button>
            </div>


            <Cards characters={myFavorites} onClose={false} title="Your favorites ❤️"/>
            {myFavorites.length === 0 && <h3 className={styles.noChars}> No characters found! </h3>}
        </>
    )
}

const mapStateToProps = (state) => ({myFavorites: state.myFavorites})
export default connect(mapStateToProps)(Favorites);
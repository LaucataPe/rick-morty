import Cards from "../Cards/Cards";
/*Redux*/
import { connect } from "react-redux";
import { removeFav } from "../../redux/actions";

export function Favorites({myFavorites, removeFav}) {
    console.log(myFavorites);

    function onClose(id) {
        removeFav(id)
     }

    return (
        <>
            <Cards characters={myFavorites} onClose={onClose} title="Your favorites"/>
        </>
    )
}

const mapStateToProps = (state) => ({myFavorites: state.myFavorites})
const mapDispatchToProps = (dispatch) =>({removeFav: (id) => dispatch(removeFav(id))})
export default connect(mapStateToProps,mapDispatchToProps)(Favorites);
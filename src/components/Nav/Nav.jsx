import SearchBar from "./SearchBar"
import { Link } from "react-router-dom";
import styles from './Nav.module.css'
import logo from '../../img/logo.png'

function Nav({onSearch, userName}) {
    return (
      <nav className={styles.nav}>
         <Link to='/home' className={styles.home}><img src={logo} alt="Logo Rick and Morty" /></Link>
         <Link to='/favorites'><button>Like ❤️</button></Link>
         <SearchBar onSearch={onSearch}/>
         <Link to='/about' className={styles.about}><button>About</button></Link>
      </nav>
    );
 }
 
 export default Nav;

 
import SearchBar from "./SearchBar"
import { Link } from "react-router-dom";
import styles from './Nav.module.css'
import logo from '../../img/logo.png'
import heart from '../../img/like.png'
import out from '../../img/logout.png'

function Nav({onSearch}) {
    return (
      <nav className={styles.nav}>
         <div className={styles.left}>
            <Link to='/home' className={styles.home}><img src={logo} alt="Logo Rick and Morty" /></Link>
            <Link to='/favorites'><img src={heart} alt="Heart" className={styles.heart}/></Link>
         </div>
         <SearchBar onSearch={onSearch}/>
         <div className={styles.right}>
            <Link to='/about'><button>About</button></Link>         
            <Link to='/' className={styles.about}><img src={out} alt="Log Out" className={styles.log}/></Link>
         </div>
      </nav>
    );
 }
 
 export default Nav;

 
/* Funcionamiento */ 
import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

/*Redux*/
import { connect } from "react-redux";
import { removeFav } from './redux/actions';

/* Vistas*/
import Nav from './components/Nav/Nav.jsx';
import About from './components/About/About.jsx';
import Cards from './components/Cards/Cards.jsx';
import Detail from './components/Detail/Detail';
import Error from './components/Error'
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';

/*API*/
const URL = 'https://be-a-rym.up.railway.app/api/character';
const KEY = 'c5e0b28c0acc.03d24138fac376f12a97';

function App({removeFav}) {
   const {pathname} = useLocation();
   const [characters, setCharacters] = useState([]);

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = 'laucata@gmail.com';
   const PASSWORD = 'Pass12sd';

   function login(userData) {
      console.log(userData);
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         console.log('Es correcto');
         navigate('/home');
      } else{
         return alert('El usuario no está registrado')
      }
   }

   function onSearch(id) {
      if(id > 826) return alert('¡La API contiene 826 personajes!');
      let repeat = characters.filter( (character) => character.id === id)
      if (repeat.length === 0) {
         axios(`${URL}/${id}?key=${KEY}`).then(({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡Ingresa un ID válido!');
            }
         });
      }else{
         return alert('El personaje ya se encuentra en pantalla')
      } 
   }

   function onClose(id) {
      setCharacters(characters.filter( (character) => character.id !== id))
      removeFav(id)
   }

   function Shownav({path}){
      if (path !== '/') return <Nav onSearch={onSearch} userName={EMAIL}/>
      return null
   }

   return (
      <>
      <Shownav path={pathname}/>
      <Routes>
         <Route path='/' element={<Form login={login}/>}/>
         <Route path='/home' element={<Cards characters={characters} onClose={onClose} title="All Characters"/>}/>
         <Route path='/about' element={<About />}/>
         <Route path='/favorites' element={<Favorites />}/>
         <Route path='/detail/:id' element={<Detail />}/>
         <Route path='/:error' element={<Error/>}/>
      </Routes>
      </>
      
   );
}

const mapStateToProps = (state) => ({myFavorites: state.myFavorites})
const mapDispatchToProps = (dispatch) =>({removeFav: (id) => dispatch(removeFav(id))})
export default connect(mapStateToProps,mapDispatchToProps)(App);

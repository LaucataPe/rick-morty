/* Funcionamiento */ 
import './App.css';
import {useState} from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

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
//const URL = 'https://be-a-rym.up.railway.app/api/character';
//const KEY = 'c5e0b28c0acc.03d24138fac376f12a97';

function App({removeFav}) {
   const {pathname} = useLocation();
   const [characters, setCharacters] = useState([]);

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);

   function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      });
   }

   function onSearch(id) {
      if(id > 826) return Swal.fire({title: 'La API contiene solo 826 personajes', icon: 'error',confirmButtonText: 'Cerrar'});
      let repeat = characters.filter( (character) => character.id === +id)
      if (repeat.length <= 0) {
         axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            }
         });
      }else{
         return Swal.fire({title: 'El personaje ya se encuentra en pantalla',icon: 'error',confirmButtonText: 'Cerrar'})
      } 
   }

   function onClose(id) {
      setCharacters(characters.filter( (character) => character.id !== id))
      removeFav(id)
   }

   return (
      <>
      {pathname !== '/' && <Nav onSearch={onSearch} />}
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

const mapStateToProps = (state) => ({allCharacters: state.allCharacters})
const mapDispatchToProps = (dispatch) =>({removeFav: (id) => dispatch(removeFav(id))})
export default connect(mapStateToProps,mapDispatchToProps)(App);


/* Funcionamiento */ 
import './App.css';
import {useState, useEffect} from 'react';
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

   useEffect(() =>{
      !access && navigate('/')
   }, [access, navigate])

   async function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';

      try {
         let response = await axios(URL + `?email=${email}&password=${password}`)
         let data = response.data;
         console.log(data);
         const { access } = data;
         setAccess(data);
         if(!access) return Swal.fire({title:'User or password incorrect!', icon: 'error',confirmButtonText: 'Cerrar'});
         access && navigate('/home');
      } catch (error) {
       console.log(error);  
      }
   }

   async function onSearch(id) {
      if(id > 826) return Swal.fire({title:'The API only contains 826 characters', icon: 'error',confirmButtonText: 'Cerrar'});
      let repeat = characters.filter( (character) => character.id === +id)
      if (repeat.length <= 0) {
         try {
            const response = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
            const data = response.data;
            if (data.name) {setCharacters((oldChars) => [...oldChars, data])}
         } catch (error) {
          console.log(error)  
         }}
         else{
         return Swal.fire({title: 'The character is already on the screen',icon: 'error',confirmButtonText: 'Cerrar'})
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


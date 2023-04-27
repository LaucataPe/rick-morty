import axios from "axios";

const endpoint = 'http://localhost:3001/rickandmorty/fav';

export const addFav = (character) => {
    return async (dispatch) => {
      try {
         let response = await  axios.post(endpoint, character)
         let data = response.data
         return dispatch({type: 'ADD_FAV',payload: data});
      } catch (error) {
         console.log(error.message);  
      }
    };
 };

 export const removeFav = (id) => {
    return async (dispatch) => {
      try {
         let response = await axios.delete(endpoint + '/' + id)
         let data = response.data
         return dispatch({type: 'REMOVE_FAV', payload: data})
      } catch (error) {
         console.log(error);  
      }
    };
 };

export const filterCards =(gender) =>{
    return { type: "FILTER", payload: gender}
}

export const orderCards =(order) =>{
    return { type: "ORDER", payload: order}
}

export const resetCards =() =>{
    return { type: "RESET"}
}
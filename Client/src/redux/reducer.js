const initialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_FAV":
            return {
                ...state,
                myFavorites: action.payload,
                allCharacters: action.payload
            }
        
        case "REMOVE_FAV":
            //let newArray = state.myFavorites.filter((character) => character.id !== action.payload)
            //let allArray = state.allCharacters.filter((character) => character.id !== action.payload)
            return {...state,
                myFavorites: action.payload, 
                allCharacters: action.payload
            }
        case "FILTER":
            let filter = state.allCharacters.filter((character) => character.gender === action.payload)
            return {...state,
                myFavorites: filter
            }
        case "ORDER":
            const myFavoritesCopy = [...state.myFavorites]
            let order;
            if(action.payload === "A") order = myFavoritesCopy.sort((x, y) => x.id - y.id)
            if(action.payload === "D") order = myFavoritesCopy.sort((x, y) => y.id - x.id)
            return {...state,
                myFavorites: order
            }
        case "RESET":
            return {...state,
                myFavorites: state.allCharacters
            }
        default:
            return {...state}
    }
}

export default reducer;
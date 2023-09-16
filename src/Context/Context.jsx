import axios from 'axios'
import {createContext, useContext, useReducer, useEffect} from 'react'

export const GlobalStates = createContext();

const reducer = (state, action) => {
  switch(action.type){
    case 'GET_ODONTOLOGOS':
      return { ...state, odontologos: action.payload}
    case 'ADD_FAV':
      if (!state.favs.some((fav) => fav.id === action.payload.id)){
        return { ...state, favs: [...state.favs, action.payload]}
      }
      alert('Este dentista ya está en tus Favoritos y no se puede agregar más de una vez') 
      return state;
    case 'REMOVE_FAVS':
      const updatedFavs = state.favs.filter((fav) => fav.id !== action.payload.id);
      return { ...state, favs: updatedFavs };
    case 'SWITCH_THEME':
      return { ...state, theme: state.theme === "light" ? "dark" : "light" }
    default:
      throw new Error()
  }
}


const localFavs = JSON.parse(localStorage.getItem('favs'))
const initialFavState = localFavs ? localFavs : []


const initialState = {
  odontologos: [],
  favs: initialFavState,
  theme: 'light',
}


export const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const url = 'https://jsonplaceholder.typicode.com/users'

  useEffect(() => {
    axios(url)
    .then(res => {
      dispatch({type: 'GET_ODONTOLOGOS', payload: res.data})})
    .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(state.favs))
  }, [state.favs])

  return(
    <GlobalStates.Provider value={{dispatch, state}}>
      {children}
    </GlobalStates.Provider>
  );
};

export default Context

export const useGlobalStates = () => useContext(GlobalStates)
import axios from 'axios'
import {createContext, useContext, useReducer, useEffect} from 'react'

export const GlobalStates = createContext();

const reducer = (state, action) => {
  switch(action.type){
    case 'GET_ODONTOLOGOS':
      return { ...state, odontologos: action.payload}
    case 'ADD_FAV':
      return { ...state, favs: [...state.favs, action.payload] };
    case 'REMOVE_FAV':
      return { ...state, favs: action.payload };
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
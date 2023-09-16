import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalStates } from '../../Context/Context'
import styles from './Navbar.module.css'

const Navbar = () => {
  const { dispatch, state} = useGlobalStates();
  
  const toggleTheme = () => {
    dispatch({type: 'SWITCH_THEME'})
  };

  return (
    <nav className={`${styles.navbar} ${state.theme}`}> 
      <h3>DH ODONTO</h3>
      <div className={styles.nav}>
      <Link to='/home'>Home</Link>
      <Link to='/favs'>Favoritos</Link>
      <Link to='/contacto'>Contactos</Link>
      {state.theme === 'dark' ? (
        <button onClick={toggleTheme} className={styles.themeLightButton}>
          ☀️
        </button>
      ) : (
        <button onClick={toggleTheme} className={styles.themeBlackButton}>
          🌙
        </button>
      )}
      </div>
    </nav>
  )
}

export default Navbar
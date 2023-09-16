import React from "react";
import { Link } from "react-router-dom";
import { useGlobalStates } from "../../Context/Context";
import doctor from '../../assets/doctor.jpg'
import styles from './Card.module.css'

const Card = ({ odontologo}) => {

  const {dispatch} = useGlobalStates()
  const addFav = ()=>{
    dispatch({type: 'ADD_FAV', payload: odontologo})
  }

  const removeFav = () => {
    dispatch({ type: 'REMOVE_FAVS', payload: odontologo });
  }

  const isInFavPage = window.location.pathname.includes("/favs");

  return (
    <div className={styles.card}>
      <Link to={`/dentist/${odontologo.id}`}>
        <img src={doctor} alt="dentist-img" />
        <h2>{odontologo.name}</h2>
        <h3>{odontologo.username}</h3>
        <h4>{odontologo.id}</h4>
      </Link>
      {isInFavPage ? (
        <button onClick={removeFav} className={styles.favButton}>❌</button>
      ) : (
        <button onClick={addFav} className={styles.favButton}>⭐</button>
      )}
    </div>
  );
};

export default Card;
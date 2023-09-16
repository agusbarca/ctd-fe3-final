import React from "react";
import { Link } from "react-router-dom";
import { useGlobalStates } from "../../Context/Context";
import doctor from '../../assets/doctor.jpg'
import styles from './Card.module.css'

const Card = ({ odontologo}) => {

  const {dispatch, state} = useGlobalStates()

  const addFav = () => {
    if (!state.favs.some((fav) => fav.id === odontologo.id)) {
      dispatch({ type: 'ADD_FAV', payload: odontologo });
    } else {
      alert('Este dentista ya está en tus Favoritos y no se puede agregar más de una vez');
    }
  }

  const removeFav = () => {
    const updatedFavs = state.favs.filter((fav) => fav.id !== odontologo.id);
    dispatch({ type: 'REMOVE_FAV', payload: updatedFavs });
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
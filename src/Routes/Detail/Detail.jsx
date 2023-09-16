import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalStates } from '../../Context/Context'
import styles from './Detail.module.css'


const Detail = () => {

  const {state} = useGlobalStates()

  const [loading, setLoading] = useState(true)
  const [dentist, setDentist] = useState({})
  const {id} = useParams()

  const url = `https://jsonplaceholder.typicode.com/users/${id}`

useEffect(() => {
  axios(url)
    .then((res) => {
      setDentist(res.data);
      setLoading(false);
    })
    .catch(err => console.log(err))
}, []);


return (
  <div className={`${styles.detail} ${state.theme}`}>
    {loading ? (
      'Cargando...'
    ) : (
      <div className={styles.dentistInfo}>
        <h1>Detalle del odontólogo {dentist.id} </h1>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{dentist.name}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{dentist.email}</td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>{dentist.phone}</td>
            </tr>
            <tr>
              <td>Website</td>
              <td>{dentist.website}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )}
  </div>
  );
};

export default Detail
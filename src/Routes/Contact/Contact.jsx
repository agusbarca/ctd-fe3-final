import React from 'react'
import Form from '../../Components/Form/Form.jsx'
import { useGlobalStates } from '../../Context/Context.jsx'
import styles from './Contact.module.css'

const Contact = () => {

  const {state} = useGlobalStates()
  
  return (
    <div className={`${styles.contact} ${styles[state.theme]}`}>
      <h2>¿Queres saber más?</h2>
      <p>Envianos tus preguntas y nos contactaremos con vos 😊</p>
      <Form/>
    </div>
  )
}

export default Contact
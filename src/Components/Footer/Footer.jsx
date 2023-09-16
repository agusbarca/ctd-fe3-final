import React from 'react'
import dhlogo from '../../assets/DH.png'
import icoinstagram from '../../assets/icoinstagram.svg'
import icotiktok from '../../assets/icotiktok.svg'
import icowhatsapp from '../../assets/icowhatsapp.svg'
import icofacebook from '../../assets/icofacebook.svg'
import { useGlobalStates } from '../../Context/Context'
import styles from './Footer.module.css'

const Footer = () => {
  const { state } = useGlobalStates();

  return (
    <footer className={`${styles.footer} ${state.theme}`}>
      <img src={dhlogo} alt='DH-logo' />
      <div className={styles.iconos}>
        <img src={icofacebook} alt="icono-facebook" />
        <img src={icoinstagram} alt="icono-instagram" />
        <img src={icotiktok} alt="icono-tiktok" />
        <img src={icowhatsapp} alt="icono-whatsapp" />
      </div>
    </footer>
  )
}

export default Footer


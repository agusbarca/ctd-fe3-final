import { useState } from "react";
import styles from './Form.module.css'

const Form = () => {

  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const [persona, setPersona] = useState({
    nombre: '',
    email: ''
  });
  
  const regexEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/

  const handleSubmit = (e) => {
    e.preventDefault()

    if (persona.nombre.length > 5 && regexEmail.test(persona.email) ) {
      setShow(true);
      setError(false);
    } else {
      setError(true);
      setShow(false);
    }
  } 

  return (
    <div className={styles["form-container"]}>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Full name"
          value={persona.nombre}
          onChange={(e) => setPersona({ ...persona, nombre: e.target.value})}
        />
        <input 
          type="text" 
          placeholder="Email"
          value={persona.email}
          onChange={(e) => setPersona({ ...persona, email: e.target.value})}
        />
        <button>Send</button>
      </form>
      {error && <h3 className={styles["error-message"]}>Por favor verifique su información nuevamente</h3>}
      {show && <h4 className={styles["success-message"]}>Gracias {persona.nombre}, te contactaremos cuando antes vía tu mail {persona.email}</h4>}
    </div>
  );
};

export default Form;

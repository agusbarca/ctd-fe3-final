import React from 'react'
import Card from '../Components/Card/Card'
import { useGlobalStates } from '../Context/Context'

const Home = () => {

  const {state} = useGlobalStates()

  return (
    <main className={state.theme} >
      <h1> HOME 🏠</h1>
      <div className='card-grid'>
        {state.odontologos.map(odontologo => <Card odontologo={odontologo} key={odontologo.id}/>)}
      </div>
    </main>
  )
}

export default Home
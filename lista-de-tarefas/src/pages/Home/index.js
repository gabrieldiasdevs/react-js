import { useState, useEffect } from 'react'
import { addDoc } from 'firebase/firestore'
import { db } from '../../services/firebaseConnection'

import './home.css'

function Home(){
  const [tarefa, setTarefa] = useState('')

  async function handleRegisterTask(){
    
  }

  return(
    <div className='container-home' >
      <h1>Minhas Tarefas</h1>
      <input
        placeholder='Digite sua tarefa...'
        value={tarefa}
        onChange={(e) => setTarefa(e.target.value)}
      />
      <button onClick={handleRegisterTask} >Registrar tarefa</button>
    </div>
  )
}

export default Home
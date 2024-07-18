import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { 
  addDoc,
  collection,
  updateDoc 
} from 'firebase/firestore'
import { db } from '../../services/firebaseConnection'

import './home.css'

function Home(){
  const location = useLocation();
  const { idUser } = location.state || {}
  const [tarefa, setTarefa] = useState('')

  useEffect(() => {
    console.log(idUser)
  }, [])

  async function handleRegisterTask(){
    await addDoc(collection(db, 'tarefas'), {
      idUser: idUser
    })
    const docRef = doc(db, 'tarefas', idUser); // Assume que o documento é identificado pelo ID do usuário
    await updateDoc(docRef, {
      tarefas: arrayUnion(tarefa) // Adiciona a nova tarefa ao array existente
    })
    .then(() => {
      console.log('deu certo')
      setTarefa('')
    })
    .catch((error) => {
      console.log(error)
    })
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
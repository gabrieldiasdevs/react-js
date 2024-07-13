import { useState } from 'react'
import { db } from './firebaseConnection'
import { doc, setDoc, collection, addDoc, getDoc } from 'firebase/firestore'

import './app.css'
 
function App() {
  const [titulo, setTitulo] = useState('')
  const [autor, setAutor] = useState('')

  async function handleAdd(){
    // await setDoc(doc(db, 'posts', '12345'), {
    //   titulo: titulo,
    //   autor: autor
    // })
    // .then(() => {
    //   console.log('Dados Registrados!')
    // })
    // .catch((error) => {
    //   console.log(error)
    // })

    await addDoc(collection(db, 'posts'), {
      titulo: titulo,
      autor: autor
    })
    .then(() => {
      console.log('Dados Registrados!')
      setAutor('')
      setTitulo('')
    })
    .catch((error) => {
      console.log(error)
    })
  }

  async function buscarPosts(){
    const postRef = doc(db, 'posts', '123')

    await getDoc(postRef)
    .then((snapshot) => {
      setAutor(snapshot.data().autor)
      setTitulo(snapshot.data().titulo)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <div>
      <h1>Firebase + ReactJS</h1>

      <div className='container'>

        <label>Titulo:</label>
        <textarea
          type='text'
          placeholder='digite o titulo'
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />

        <label>Autor:</label>
        <input
          type='text'
          placeholder='autor do post'
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
        />

        <button onClick={handleAdd} >Cadastrar</button>
        <button onClick={buscarPosts} >Buscar Posts</button>

      </div>
    </div>
  )
}

export default App;
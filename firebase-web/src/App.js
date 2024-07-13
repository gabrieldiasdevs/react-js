import { useState } from 'react'
import { db } from './firebaseConnection'
import { doc, setDoc, collection, addDoc, getDoc, getDocs, updateDoc, deleteDoc } from 'firebase/firestore'

import './app.css'
 
function App() {
  const [titulo, setTitulo] = useState('')
  const [autor, setAutor] = useState('')
  const [idPost, setIdPost] = useState('')
  const [posts, setPosts] = useState([])

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
    // const postRef = doc(db, 'posts', '123')

    // await getDoc(postRef)
    // .then((snapshot) => {
    //   setAutor(snapshot.data().autor)
    //   setTitulo(snapshot.data().titulo)
    // })
    // .catch((error) => {
    //   console.log(error)
    // })

    const postsRef = collection(db, 'posts')
    await getDocs(postsRef)
    .then((snapshot) => {
      let lista = []

      snapshot.forEach((doc) => {
        lista.push({
          id: doc.id,
          titulo: doc.data().titulo,
          autor: doc.data().autor
        })
      })

      setPosts(lista)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  async function editarPosts(){
    const docRef = doc(db, 'posts', idPost)
    await updateDoc(docRef, {
      titulo: titulo,
      autor: autor
    })
    .then(() => {
      console.log('Dados Atualizados!')
      setIdPost('')
      setAutor('')
      setTitulo('')
    })
    .catch((error) => {
      console.log(error)
    })
  }

  async function excluirPost(id){
    const postsRef = doc(db, 'posts', id)
    await deleteDoc(postsRef)
    .then(() => {
      console.log('Documento deletado com cucesso!')
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <div>
      <h1>Firebase + ReactJS</h1>

      <div className='container'>

        <label>ID do Post:</label>
        <input
          placeholder='Digite o ID do Post'
          value={idPost}
          onChange={(e) => setIdPost(e.target.value)}
        /> <br/>

        <label>Titulo:</label>
        <textarea
          type='text'
          placeholder='digite o titulo'
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        /> <br/>

        <label>Autor:</label>
        <input
          type='text'
          placeholder='autor do post'
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
        /> <br/>

        <button onClick={handleAdd} >Cadastrar</button>
        <button onClick={buscarPosts} >Buscar Posts</button> <br/>
        <button onClick={editarPosts} >Atualizar Posts</button>

        <ul>
          {posts.map((post) => {
            return(
              <li>
                <strong>ID: {post.id}</strong> <br/>
                <span>Titulo: {post.titulo}</span> <br/>
                <span>Autor: {post.autor} </span>
                <button onClick={() => excluirPost(post.id)} >Excluir</button> <br/> <br/>
              </li>
            )
          })}
        </ul>

      </div>
    </div>
  )
}

export default App;
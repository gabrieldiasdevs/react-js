import { useState, useEffect } from 'react'
import { db, auth } from './firebaseConnection'
import { 
  doc, 
  collection, 
  addDoc, 
  setDoc,
  getDoc,
  getDocs, 
  updateDoc, 
  deleteDoc,
  onSnapshot
} from 'firebase/firestore'

import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'

import './app.css'
 
function App() {
  const [titulo, setTitulo] = useState('')
  const [autor, setAutor] = useState('')
  const [idPost, setIdPost] = useState('')
  const [posts, setPosts] = useState([])

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(false)
  const [userDetail, setUserDetail] = useState({})

  useEffect(() => {

    async function loadPosts(){
      const unsub = onSnapshot(collection(db, 'posts'), (snapshot) => {
        let listaPost = []

        snapshot.forEach((doc) => {
          listaPost.push({
            id: doc.id,
            titulo: doc.data().titulo,
            autor: doc.data().autor
          })
        })

        setPosts(listaPost)
      })
    }

    loadPosts()

  }, [])

  useEffect(() => {

    async function checkLogin(){
      onAuthStateChanged(auth, (user) => {
        if(user){

          setUser(true)
          setUserDetail({
            uid: user.uid,
            email: user.email
          })

        }else{
          setUser(false)
          setUserDetail({})
        }
      })
    }

    checkLogin()

  }, [])

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
  
  async function novoUsuario(){
    await createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      console.log('Cadastrado com cucesso')
      setEmail('')
      setPassword('')
    })
    .catch((error) => {
      console.log(error)
    })
  }

  async function logarUsuario(){
    await signInWithEmailAndPassword(auth, email, password)
    .then((value) => {
      setUserDetail({
        uid: value.user.uid,
        email: value.user.email
      })

      setUser(true)
      setEmail('')
      setPassword('')
    })
    .catch((error) => {
      console.log(error)
    })
  }

  async function fazerLogout(){
    await signOut(auth)
    setUser(false)
    setUserDetail({})
  }

  return (
    <div>
      <h1>Firebase + ReactJS</h1>

      {user && (
        <div>
          <strong>Seja bem-vindo(a) você está logado!</strong> <br/>
          <span>ID: {userDetail.uid} - EMAIL: {userDetail.email}</span> <br/>
          <button onClick={fazerLogout} >Sair da Conta</button> 
          <br/> <br/>
        </div>
      )}

      <div className='container' >
        <h2>Usuários</h2>

        <label>Email</label>
        <input
          value={email}
          placeholder='Digite um email'
          onChange={(e) => setEmail(e.target.value)}
        /> <br/>

        <label>Senha</label>
        <input
          value={password}
          placeholder='Informe sua senha'
          onChange={(e) => setPassword(e.target.value)}
        /> <br/>

        <button onClick={novoUsuario} >Cadastrar</button>
        <button onClick={logarUsuario} >Fazer Login</button>
      </div>

      <br/> <br/>
      <hr/>

      <div className='container'>
        <h2>Posts</h2>

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
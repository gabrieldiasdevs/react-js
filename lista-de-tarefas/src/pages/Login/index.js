import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../services/firebaseConnection'
import { signInWithEmailAndPassword } from 'firebase/auth'

import './login.css'

function Login(){
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleLogin(){
    await signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      console.log('usuario logado')
      setEmail('')
      setPassword('')
      navigate('/admin')
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return(
    <div className='container' >
      <h1>Lista de Tarefas</h1>
      <p>Gerencie sua agenda de forma fácil.</p>

      <input
        type='text'
        placeholder='Digite seu email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type='password'
        placeholder='Digite sua senha'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin} >Acessar</button>
      <Link to='/register' >Não possui uma conta? Cadastre-se</Link>
    </div>
  )
}

export default Login
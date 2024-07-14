import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import './login.css'

function Login(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return(
    <div className='container' >
      <h1>Lista de Tarefas</h1>
      <p>Gerencie sua agenda de forma fácil.</p>

      <input
        placeholder='Digite seu email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder='Digite sua senha'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button>Acessar</button>
      <Link to='/register' >Não possui uma conta? Cadastre-se</Link>
    </div>
  )
}

export default Login
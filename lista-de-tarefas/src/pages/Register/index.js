import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../services/firebaseConnection'
import { createUserWithEmailAndPassword } from 'firebase/auth'
 
function Register(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleRegister(){
    await createUserWithEmailAndPassword(auth, email, password)
  }

  return(
    <div className='container' >
      <h1>Cadastre-se</h1>
      <p>Vamos criar sua conta.</p>

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

      <button onClick={handleRegister} >Cadastrar</button>
      <Link to='/' >Já possui uma conta? Faça login!</Link>
    </div>
  )
}

export default Register
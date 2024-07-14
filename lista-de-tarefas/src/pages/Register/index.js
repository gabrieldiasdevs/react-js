import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../services/firebaseConnection'
import { createUserWithEmailAndPassword } from 'firebase/auth'
 
function Register(){
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleRegister(){
    await createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      console.log('usuario registrado')
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
      <h1>Cadastre-se</h1>
      <p>Vamos criar sua conta.</p>

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

      <button onClick={handleRegister} >Cadastrar</button>
      <Link to='/' >Já possui uma conta? Faça login!</Link>
    </div>
  )
}

export default Register
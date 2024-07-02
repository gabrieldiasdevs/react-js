import React from 'react'
import { Link } from 'react-router-dom'

function Sobre() {
  return (
    <div>
      <h1>SOBRE</h1>

      <Link to='/'>Home</Link> <br/>
      <Link to='/contato'>Contato</Link>
    </div>
  )
}

export default Sobre
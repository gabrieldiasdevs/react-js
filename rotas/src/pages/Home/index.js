import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>HOME</h1>

      <Link to='/sobre'>Sobre</Link> <br/>
      <Link to='/contato'>Contato</Link>
    </div>
  )
}

export default Home
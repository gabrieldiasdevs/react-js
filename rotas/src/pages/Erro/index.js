import { Link } from 'react-router-dom'

function Erro(){
  return(
    <div>
      <h2>Esta pagina nao existe</h2>

      <Link to='/'>Home</Link>
      <Link to='/sobre'>Sobre</Link>
      <Link to='/contato'>Contato</Link>
    </div>
  )
}

export default Erro
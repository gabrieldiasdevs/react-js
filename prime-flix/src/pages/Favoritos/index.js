import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import './favoritos.css'

function Favoritos(){
  const [filmes, setFilmes] = useState([])

  useEffect(() => {

    const minhaLista = localStorage.getItem('@primeflix')
    setFilmes(JSON.parse(minhaLista) || [])

  }, [])

  function handleDelete(id) {
    const filmesAtualizados = filmes.filter(filme => filme.id !== id)
    setFilmes(filmesAtualizados)
    localStorage.setItem('@primeflix', JSON.stringify(filmesAtualizados))
    toast.success('Filme removido com sucesso')
  }

  return(
    <div className='meus-filmes' >
      <h1>Meus Filmes</h1>

      {filmes.length === 0 && <span>Você não possui nenhum filme salvo :( </span>}

      <ul>
        {filmes.map((item) => {
          return(
            <li key={item.id}>
              <span>{item.title}</span>
              <div>
                <Link to={`/filme/${item.id}`} >Ver Detalhes</Link>
                <button onClick={() => handleDelete(item.id)} >Excluir</button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Favoritos
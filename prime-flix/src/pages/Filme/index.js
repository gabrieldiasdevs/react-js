import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import api from '../../services/api'

import './filme-info.css'

function Filme(){
  const navigate = useNavigate()
  
  const { id } = useParams()
  const [filme, setFilme] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    async function loadFilme(){
      await api.get(`/movie/${id}`, {
        params:{
          api_key: '048f4341c03c3808f1f5dcc739d841a7',
          language: 'pt-BR'
        }
      })
      .then((response) => {

        setFilme(response.data)
        setLoading(false)

      })
      .catch((err) => {
        navigate('/', { replace: true })
        return
      })
    }

    loadFilme()

    return () => {
      console.log('Componente Desmontado')
    }
 
  }, [navigate, id])

  if(loading){
    return(
      <div className='filme-info ' >
        <h1>Carregando detalhes...</h1>
      </div>
    )
  }

  return(
    <div className='filme-info' >
      <h1>{filme.title}</h1>
      <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />

      <h3>Sinopse</h3>
      <span>{filme.overview}</span>
      <strong>Avaliação: {filme.vote_average.toFixed(1)} / 10</strong>

      <div className='area-buttons'>
        <button>Salvar</button>
        <button>
          <a href={`https://youtube.com/results?search_query=${filme.title} Trailer`} target='_blank' rel='external' >
            Trailer
          </a>
        </button>
      </div>

    </div>
  )
}

export default Filme
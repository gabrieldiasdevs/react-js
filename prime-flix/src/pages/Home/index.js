import { useEffect, useState } from 'react'
import api from '../../services/api'

function Home(){
  const [filmes, setFilmes] = useState([])

  useEffect(() => {

    async function loadFilmes(){
      const response = await api.get('movie/now_playing', {
        params:{
          api_key: '048f4341c03c3808f1f5dcc739d841a7',
          language: 'pt-BR',
          page: 1
        }
      })

      try{
        
      }catch(err){
        console.log(err)
      }

    }

    loadFilmes()

  }, [])

  return(
    <div>
      <h1>HOME</h1>
    </div>
  )
}

export default Home
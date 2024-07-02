// Base da URL: https://api.themoviedb.org/3/

// URL DA API: https://api.themoviedb.org/3/movie/now_playing?api_key=048f4341c03c3808f1f5dcc739d841a7&language=pt-BR

import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
})

export default api
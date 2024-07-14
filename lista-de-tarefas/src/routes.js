import { 
  BrowserRouter, 
  Route, 
  Routes 
} from 'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'

import Erro from './pages/Erro'

function RoutesApp(){
  return(
    <BrowserRouter>
      <Routes>

        <Route path='/' element={ <Login/> } />
        <Route path='/register' element={ <Register/> } />
        <Route path='/admin' element={ <Home/> } />

        <Route path='*' element={ <Erro/> } />

      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp
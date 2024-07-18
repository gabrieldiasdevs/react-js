import { 
  BrowserRouter, 
  Route, 
  Routes 
} from 'react-router-dom'

import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'
import Erro from '../pages/Erro'

import Private from './Private'

function RoutesApp(){
  return(
    <BrowserRouter>
      <Routes>

        <Route path='/' element={ <Login/> } />
        <Route path='/register' element={ <Register/> } />
        <Route path='/admin' element={ <Private> <Home/> </Private> } />

        <Route path='*' element={ <Erro/> } />

      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp
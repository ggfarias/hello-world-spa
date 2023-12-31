import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from './pages/Inicio'
import SobreMim from './pages/SobreMim'
import Menu from './components/Menu'

function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Menu />

        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/SobreMim' element={<SobreMim/>}/>
          <Route path='*' element={<div>Página não encontrada!</div>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppRoutes

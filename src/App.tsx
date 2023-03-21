import { Routes, Route, Navigate } from 'react-router-dom'
import { Home } from './pages/home/home'
import { routes } from './routes'
import './App.scss'

function App() {
  const { homeRoute } = routes

  return (
    <div>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='*' element={<Navigate replace to={'/'} />} />
      </Routes>
    </div>
  )
}

export default App

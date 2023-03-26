import { Routes, Route, Navigate } from 'react-router-dom'
import { LandingPage } from './pages/home/landing'
import { routes } from './routes'
import './App.scss'

function App() {
  const { homeRoute } = routes

  return (
    <div>
      <Routes>
        <Route path='/home' element={<LandingPage />} />
        <Route path='*' element={<Navigate replace to={'/'} />} />
      </Routes>
    </div>
  )
}

export default App

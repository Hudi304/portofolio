import React, { useEffect } from 'react'
import { Routes, Route, Navigate, Outlet } from 'react-router-dom'
import { Home } from './pages/home/home'
import './App.scss'
import { routes } from './routes'

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [dark, setDark] = React.useState(false)
  const { completeProfile, componentPreview, homeRoute, signUp } = routes

  const appClasses = `App ${dark && 'dark'}`

  return (
    <div className={appClasses}>
      <Routes>
        <Route path={homeRoute} element={<Home />} />
        <Route path='*' element={<Navigate replace to={'/home'} />} />
      </Routes>
    </div>
  )
}

export default App

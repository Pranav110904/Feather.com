import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>} />

      </Routes>
    </>
  )
}

export default App

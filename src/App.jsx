import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router'
import LoginPage from './Pages/LoginPage'

import './App.css'



 

function App() {
  return(
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<LoginPage />} />
       <Route path="/dashboard" element={<div>Dashboard</div>} />
        
      </Routes>
    </BrowserRouter>

  )
}

export default App

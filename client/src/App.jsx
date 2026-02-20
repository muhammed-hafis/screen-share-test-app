import React from 'react'
import { Route,Routes } from 'react-router'
import Home from './pages/Home'
import ScreenTest from './pages/ScreenTest'
function App() {
  return (
    
    <Routes>

      <Route path='/' element={<Home/> } />
      <Route path='/screen-test' element={<ScreenTest/> } />
    </Routes>
    
  )
}

export default App
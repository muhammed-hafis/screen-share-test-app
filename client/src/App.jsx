import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ScreenTest from './pages/ScreenTest'
import Layout from './components/layout/Layout'
function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/screen-test' element={<ScreenTest />} />
      </Routes>
    </Layout>


  )
}

export default App
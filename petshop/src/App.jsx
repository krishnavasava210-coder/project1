import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Header from './Component/Layout/Header'
import Home from './Component/Pages/Home'
import About from './Component/Pages/About'
import Contact from './Component/Pages/Contact'

function App() {
  return (
    <>
      <div>
        <Routes>
          <Header/>
          <Router>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Router>
        </Routes>
      </div>
    </>
  )
}

export default App;

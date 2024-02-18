import React from 'react'
import {Outlet} from 'react-router-dom'
import {Header,Footer} from './components/index.js'
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import ScrollToTopPage from './hooks/ScrollToTop.js'

function App() {
  return (
    <div className='scroll-smooth'>
      <Header />
      <Outlet/>
      <Footer />
    </div>
    
  )
}

export default App

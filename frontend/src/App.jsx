import React from 'react'
import {Outlet} from 'react-router-dom'
import {Header,Footer} from './components'
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import ScrollToTopPage from './hooks/ScrollToTop.js'

function App() {
  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
    
  )
}

export default App

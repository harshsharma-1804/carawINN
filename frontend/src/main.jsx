import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import App from './App.jsx'
import {Products, BookRide} from './components'
import './index.css'

const router = createBrowserRouter(
  
  createRoutesFromElements(
    
      <Route path='/' element={<App />}>
        <Route index element={<Products />} />
        <Route path='/bookride/:id' element={<BookRide />} />
      </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)

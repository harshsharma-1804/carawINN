import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter, BrowserRouter as Router, createRoutesFromElements, Route, Routes} from 'react-router-dom'
import App from './App.jsx'
import {Home, SignIn, Auth, Register,FleetPage, Products, BookRide} from './components/index.js'
import './index.css'

// const router = createBrowserRouter([
//   {
//     path: '/', element: <App />, children : [{path: '', element: <Home />},
//                                              {path: 'fleets', element: <FleetPage />},
//                                              {path: 'fleets/:_title', element: <Products />},
//                                              {path: 'fleets/_title/bookride/:id', element: <BookRide />}]
//   },
//   {
//     path: 'signin', element: <SignIn />, children : [{path: 'authenticate', element: <Auth />}]
  
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<App />}>
        <Route index element={<Home />}/>
        <Route path='fleets' element={<FleetPage />} />  {/*<Products/> -> <FleetPage />*/}
        <Route path='fleets/:_title' element={<Products />}>
          {/* <Route path='bookride/:id' element={<BookRide />} /> */}
        </Route>
        <Route path='fleets/:_title/bookride/:id' element={<BookRide />} />
      </Route>
          
      <Route path='signin' element={<SignIn />} />
      <Route path='authenticate' element={<Auth />} />
      <Route path='register' element={<Register />}/>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

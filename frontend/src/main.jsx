import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import {Home, Dashboard,Profile, PaymentHistory, YourRides,Login1, Login2, Register,FleetPage, Products, BookRide} from './components/index.js'
import './index.css'
import Layer1 from './Layer1.jsx'
import Layer2 from './Layer2.jsx'
import { Provider } from 'react-redux'
import store from './app/store'

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
      <Route path='/' element={<Layer1 />}>
        <Route index element={<Home />}/>
        <Route path='fleets' element={<FleetPage />} />  {/*<Products/> -> <FleetPage />*/}
        <Route path='fleets/:_title' element={<Products />}>
          {/* <Route path='bookride/:id' element={<BookRide />} /> */}
        </Route>
        <Route path='fleets/:_title/bookride/:id' element={<BookRide />} />
        <Route path='dashboard' element={<Dashboard />}>
          <Route path='profile' element={<Profile />} />
          <Route path='paymenthistory' element={<PaymentHistory />} />
          <Route path='yourrides' element={<YourRides />} />
        </Route>
      </Route>
      <Route path='user' element={< Layer2 />}>
        <Route path='signin' element={<Login1 />}/ >
        <Route path='authenticate' element={<Login2 />}/>
        <Route path='signup' element={<Register />}/>
      </Route>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)

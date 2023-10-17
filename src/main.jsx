import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import myFirstProject from './pages/Route/Route'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
   <RouterProvider router={myFirstProject}></RouterProvider> 
  </React.StrictMode>,
)

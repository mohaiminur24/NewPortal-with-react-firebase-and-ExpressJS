import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AuthContext from './Components/AuthContextLayout/AuthContext.jsx'
import { RouterProvider } from 'react-router-dom'
import { route } from './Components/RoutingLayout/Route.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContext>
      <RouterProvider router={route}/>
    </AuthContext>
  </React.StrictMode>
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './Routers/Route'
import AppContext from './Context/AppContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppContext>
      <RouterProvider router={router} >
      </RouterProvider>
    </AppContext>
  </StrictMode>,
)

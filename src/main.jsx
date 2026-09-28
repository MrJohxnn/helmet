import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './Routes/AppRoutes'
import { HelmetProvider } from './Context/HelmetProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter basename="/helmet">
        <AppRoutes />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
)
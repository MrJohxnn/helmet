import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { AppRoutes } from './Routes/AppRoutes'
import { HelmetProvider } from './Context/HelmetProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <HashRouter>
        <AppRoutes />
      </HashRouter>
    </HelmetProvider>
  </React.StrictMode>
)
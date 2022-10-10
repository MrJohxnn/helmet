import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from './Routes/AppRoutes';

ReactDOM.createRoot(document.getElementById('root')).render(
    
// <HelmetProvider>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
// </HelmetProvider>

)

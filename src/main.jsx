import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from "react-router-dom";
import { LogSesion } from './LogSesion';
import { AppRouterMain } from './Routes/AppRouterMain';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
      <LogSesion />
    </Router>
)

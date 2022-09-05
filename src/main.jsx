import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from "react-router-dom";
import { LogSesion } from './LogSesion';
import { AppRouterCli } from './Routes/AppRouterCli';
import { AppRouterMain } from './Routes/AppRouterMain';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
      <AppRouterCli />
    </Router>
)
